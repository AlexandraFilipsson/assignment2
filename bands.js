
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
      this.bandList.push(data[i]);
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

  onGoingBand() {
    console.log(4)
    const temp = [];
    for (let i = 0; i < this.getLength(); i++) {
      console.log(5)
      if (this.bandList[i].Disbandment === null) {
        console.log(6)
        temp.push({ bandId: this.bandList[i].bandId, bandName: this.bandList[i].Name })
      }
    }
    return temp;
  }

  displayOngoingBand() {
    const temp = this.onGoingBand();
    console.log(1)
    if (temp.length != 0) {
      console.log(2)
      for (let i = 0; i < temp.length; i++) {
        console.log(3)
        console.log(`${i}. ${temp[i].bandName}`);
      }

    }
    return temp;
  }

  editBandList(index, musicianId, musicanName, instrument, date) {
    this.bandList[index].BandmemberIn.push({ musicianId: musicianId, musicanName: musicanName, instrument: instrument, Bandformed: date })
  }
}
