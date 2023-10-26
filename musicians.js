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

  fetchMusiciansList() {
    const jsonString = fs.readFileSync("musicians.json");
    const data = JSON.parse(jsonString);


    for (let i = 0; i < data.length; i++) {
      this.musicianList.push(data[i]);
    }
  }

  addMusicianToList(name, birthyear, instrument, info) {
    const newMusician = new Musicians2(name, birthyear, instrument, info);
    this.musicianList.push(newMusician.dataInfo());
    this.writeJson();
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
      console.log(`${i}. ${this.musicianList[i].name}`)
    } //TA BORT ${this.musicianList[i].Age} - behövs ej
  }
  displayOneMusicians(options) {
    console.log(this.musicianList[options])
  }

  createBand(options, bandName, created, instrumet, info) {
    const temptId = this.band.createBand(bandName, created, this.musicianList[options].musicianId, this.musicianList[options].name, instrumet, info);
    this.editMusicList(options, instrumet, temptId, bandName, created)
    this.band.writeJson()
    this.writeJson()

  }

  editMusicList(option, instrument, temptId, bandName, created) {
    if (!this.musicianList[option].Instrument.includes(instrument)) {
      this.musicianList[option].Instrument.push(instrument);
    }
    this.musicianList[option].BandmemberIn.push({ bandName: bandName, bandId: temptId, Joined: created });
  }
  addMusicianToBand(musicianIndex, instrument, bandId, bandName) {
    let date = new Date().getFullYear();
    this.editMusicList(musicianIndex, instrument, bandId, bandName);
    this.band.editBandList(this.band.bandList.findIndex(x => x.bandId === bandId), this.musicianList[musicianIndex].musicianId, this.musicianList[musicianIndex].name, instrument, date)
    this.band.writeJson();
    this.writeJson();
  }

  removeMusician(bandId, bandIndex, musicId) {
    const date = new Date().toLocaleString();

    this.band.currentToPrevious(bandIndex, musicId, date);
    this.currentToPrevious(this.musicianList.findIndex(x => x.musicianId === musicId), bandId, date);
    this.band.writeJson();
    this.writeJson();

  }

  currentToPrevious(musicianIndex, bandId, date) {
    const musician = this.musicianList[musicianIndex];
    const band = musician.BandmemberIn.find(x => x.bandId === bandId);
    band["timeLeft"] = date;

    musician.PreviousBandmemberIn.push(band);
    musician.BandmemberIn.splice(musician.BandmemberIn.findIndex(x => x.bandId === bandId), 1)
  }
}
