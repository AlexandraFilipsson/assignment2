
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
    const temp = [];
    for (let i = 0; i < this.getLength(); i++) {
      if (this.bandList[i].Disbandment === null) {
        temp.push({ bandId: this.bandList[i].bandId, bandName: this.bandList[i].Name, index: i })
      }
    }
    return temp;
  }

  displayOngoingBand() {
    const temp = this.onGoingBand();
    if (temp.length != 0) {
      for (let i = 0; i < temp.length; i++) {
        console.log(`${i}. ${temp[i].bandName}`);
      }

    }
    return temp;
  }

  displayCurrentMember(bandindex) {
    const band = this.bandList.[bandindex].CurrentBandMember;
    const currentMember = [];
    for (let i = 0; i < band.length; i++) {
      console.log(`${i}. ${band[i].Name} ${band[i].instrument})`)
    }
  }


  editBandList(index, musicianId, musicanName, instrument, date) {
    this.bandList[index].CurrentBandMember.push({ memberId: musicianId, name: musicanName, instrument: instrument, yearJoined: date })
  }
}

