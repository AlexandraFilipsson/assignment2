export default class Bands2 {
  //årtal skapades, upphörde, lista om bandmedlemmar och vilka instrument, lista över tidigare medlemmar
  name;
  bandformed;
  disbandment;
  bandmembers;
  previousBandmebers;

  //GLÖM INTE LÄGGA TILL VILKET INSTRUMENT DE SPELAR 

  constructor(name, bandformed, disbandment, bandmembers, previousBandmebers) {
    this.namn = name;
    this.bandformed = bandformed;
    this.disbandment = disbandment;
    this.bandmembers = bandmembers;
    this.previousBandmebers = previousBandmebers;
  }

  get name() {
    return this.namn;
  }

  set name(newName) {
    this.namn = newName;
  }

  get bandformed() {
    this.bandformed;
  }

  set bandformed(newBandformed) {
    this.bandformed = newBandformed;
  }

  get disbandment() {
    this.disbandment
  }
  set disbandment(newDisbandment) {
    this.disbandment = newDisbandment;
  }

  get bandmembers() {
    this.bandmembers
  }
  set bandmembers(newBandmembers) {
    this.bandmembers = newBandmembers;
  }

  get previousBandmebers() {
    this.previousBandmebers
  }
  set previousBandmebers(newPreviousBandmebers) {
    this.previousBandmebers = newPreviousBandmebers;
  }

  birthyearToAge(a) {
    const todaysYear = new Date();
    const BornYear = new Date(a);
    const TodayA = (todaysYear.getFullYear() * 12)
    const YearA = (BornYear.getFullYear() * 12)
    const Age = (Math.floor((TodayA - YearA) / 12));
    return Age;
  }

  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      "Name": this.namn,
      "Bandformed": this.bandformed,
      "Disbandment": this.disbandment,
      "bandmembers": [this.bandmembers],
      "PreviousBandmebers in": [this.bandmembers],
      "Previous bandmember in": []
    };
  }
} 