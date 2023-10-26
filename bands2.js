export default class Bands2 {

  name;
  bandformed;
  disbandment;
  bandmembers;
  previousBandmebers;
  info;



  constructor(name, created, id, musicianName, instrument, info) {
    this.namn = name;
    this.bandformed = created;
    this.bandmembers = musicianName;
    this.instrument = instrument;
    this.memberId = id;
    this.info = info;
  }



  dataInfo() {
    return {
      bandId: 'id' + new Date().getTime(),
      "Name": this.namn,
      "Bandformed": this.bandformed,
      "Disbandment": null,
      "CurrentBandMember": [{ memberId: this.memberId, name: this.bandmembers, instrument: this.instrument, yearJoined: this.bandformed }],
      "PreviousBandmebersIn": [],
      "info": this.info
    }
  }
}