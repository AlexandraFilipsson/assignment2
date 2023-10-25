// DENNA ÄR DOGS.JS I LINUS EXEMPEL

import fs from "fs";
import Band2 from "./bands2.js";

export default class Bands {
  bandList = [];

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


  getLength() {
    return this.bandList.length;
  }

  createBand(name, created, id, musicianName, instrument, info) {
    const newBand = new Band2(name, created, id, musicianName, instrument, info);
    this.bandList.push(newBand.dataInfo());
    return newBand.dataInfo().bandId;
  }
  //det behöver inte vara exakt samma namn i creatBand

  writeJson() {
    fs.writeFileSync('./bands.json', JSON.stringify(this.bandList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

}
