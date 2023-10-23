export default class Bands2 {
  //årtal skapades, upphörde, lista om bandmedlemmar och vilka instrument, lista över tidigare medlemmar
  name;
  bandformed;
  disbandment;
  bandmembers;
  previousBandmebers;

  //GLÖM INTE LÄGGA TILL VILKET INSTRUMENT DE SPELAR 

  constructor(name, created, id, musicianName, instrument) {
    this.namn = name;
    this.bandformed = created;
    this.bandmembers = musicianName;
    this.instrument = instrument;
    this.memberId = id;
  }


  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      bandId: 'id' + new Date().getTime(),
      "Name": this.namn,
      "Bandformed": this.bandformed,
      "Disbandment": null,
      "CurrentBandMember": [{ memberId: this.memberId, name: this.bandmembers, instrument: this.instrument, yearJoined: this.bandformed }],
      "PreviousBandmebers in": []
    }
  }
} 