export default class Musician2 {
  namn;
  birthyear;
  instrument;

  constructor(name, birthyear, instrument) {
    this.namn = name;
    this.birthyear = birthyear;
    this.instrument = instrument;

  }

  get name() {
    return this.namn;
  }

  set name(newName) {
    this.namn = newName;
  }

  get birthyear() {
    this.birthyear;
  }

  set birthyear(newBirthYear) {
    this.birthyear = newBirthYear;
  }

  get instrument() {
    this.instrument
  }
  set instrument(newInstrument) {
    this.instrument = newInstrument;
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
      "name": this.namn,
      "birthyear": this.birthyear,
      "Age": this.birthyearToAge(this.birthyear),
      "Instrument": [this.instrument],
      "Bandmember in": [],
      "Previous bandmember in": []
    };
  }
} 