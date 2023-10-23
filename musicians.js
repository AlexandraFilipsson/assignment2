

import fs from "fs";
import Musicians2 from "./musicians2.js";

export default class Musician {
  musicianList = [];

  constructor() {
    this.fetchMusiciansList();
  }

  get musicianList() {
    return this.musicianList;
  }

  fetchMusiciansList() {
    const jsonString = fs.readFileSync("musicians.json");
    const data = JSON.parse(jsonString);


    for (let i = 0; i < data.length; i++) {
      this.musicianList.push(new Musicians2(data[i]));
    }
  }

  writeOutMusician() {
    for (let i = 0; i < this.musicianList.length; i++) {
      console.log(`${i + 1}. ${this.musicianList[i].name}`);
    }
  }

  addMusicianToList(name, birthyear, instrument) {
    this.musicianList.push(new Musicians2(name, birthyear, instrument));
    this.#updateJsonFile();
  }

  removeMusicianFromList(index) {
    this.musicianList.splice(index, 1);
    this.#updateJsonFile();
  }

  #updateJsonFile() {
    let tempList = [];
    for (let i = 0; i < this.musicianList.length; i++) {

      tempList.push(this.musicianList[i].dataInfo());
    }

    fs.writeFileSync('./musicians.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }


  getLength() {
    return this.musicianList.length;
  }
} 
