// DENNA ÄR DOGS.JS I LINUS EXEMPEL

import fs from "fs";
import bands2 from "./bands2.js";

export default class Bands {
  bandsList = [];

  constructor() {
    this.fetchBandsList();
  }

  get bandList() {
    return this.bandList;
  }

  fetchBandsList() {
    const jsonString = fs.readFileSync("bands.json");
    const data = JSON.parse(jsonString);


    for (let i = 0; i < data.length; i++) {
      this.bandList.push(new Band2(data[i]));
    }
  }

  WriteOutBand() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].name}`);
    }
  }

  addBandToList(name, bandformed, instrument) {
    this.bandList.push(new Band2(name, birthyear, instrument));
    this.#updateJsonFile();
  }

  removeBandFromList(index) {
    this.bandList.splice(index, 1);
    this.#updateJsonFile();
  }

  #updateJsonFile() {
    let tempList = [];
    for (let i = 0; i < this.bandList.length; i++) {

      tempList.push(this.bandList[i].dataInfo());
    }

    fs.writeFileSync('./bands.json', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }


  getLength() {
    return this.bandList.length;
  }
} 