export default class Musician2 {
  namn;
  birthyear;

  constructor(name, birthyear) {
    this.namn = name;
    this.birthyear = birthyear;
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

  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      "name": this.namn,
      "birthyear": this.birthyear,
      "Bandmember in": [],
      "Previous bandmember in": [],
      "Instrument": []
    };
  }
} 