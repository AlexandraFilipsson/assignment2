//index bara grundnavigering
//Band.js och musician.js ska hålla information om alla objekt och ansvarar för att läsa in alla objekt som är sparade in JSON-filen.
//Ska finnas metoder i js-filerna låter mig skriva ut varje enskilt objelt.

export default class Band {
  #namn;
  #CurrentInBand;

  constructor(name, CurrentInBand = false) {
    this.#namn = name;
    this.#CurrentInBand = CurrentInBand;
  }

  get name() {
    return this.#namn;
  }

  get checkedIn() {
    return this.#CurrentInBand;
  }

  set name(newName) {
    this.#namn = newName;
  }

  checkInAndOut() {
    this.#CurrentInBand = !this.#CurrentInBand;
  }

  // Skapar ett objekt med denna hundens egenskaps information. 
  // Används när vi ska skicka in till "Hundar.json". 
  dataInfo() {
    return {
      "name": this.#namn,
      "checkedIn": this.#CurrentInBand
    };
  }
}