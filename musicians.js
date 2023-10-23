// DENNA ÄR DOGS.JS I LINUS EXEMPEL

import fs from "fs";
import Musicians2 from "./musician2.js";
import Bands from "./bands.js";

export default class Musician {
  musicianList = [];

  constructor() {
    this.fetchMusiciansList();
    this.band = new Bands();

  }

  get musicianList() {
    return this.musicianList;
  }

  fetchMusiciansList() {
    const jsonString = fs.readFileSync("musicians.json");
    const data = JSON.parse(jsonString);


    for (let i = 0; i < data.length; i++) {
      this.musicianList.push(data[i]);
    }
  }

  addMusicianToList(name, birthyear, instrument) {
    const newMusician = new Musicians2(name, birthyear, instrument);
    this.musicianList.push(newMusician.dataInfo());
    this.writeJson()
  }

  writeJson() {
    fs.writeFileSync('./musicians.json', JSON.stringify(this.musicianList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }


  getLength() {
    return this.musicianList.length;
  }

  displayAllMusicians() {
    for (let i = 0; i < this.getLength(); i++) {
      console.log(`${i}. ${this.musicianList[i].name} ${this.musicianList[i].Age}`)
    }
  }
  displayOneMusicians(options) {
    console.log(this.musicianList[options])
  }

  createBand(options, bandName, created, instrumet) {
    const temptId = this.band.createBand(bandName, created, this.musicianList[options].musicianId, this.musicianList[options].name, instrumet);
    this.editMusicList(options, instrumet, temptId, bandName, created)
    this.writeJson()
    this.band.writeJson()
  }

  editMusicList(option, instrument, temptId, bandName, created) {
    if (!this.musicianList[option].Instrument.includes(instrument)) {
      this.musicianList[option].Instrument.push(instrument);
    }
    this.musicianList[option].BandmemberIn.push({ bandName: bandName, bandId: temptId, Joined: created });


  }

} 