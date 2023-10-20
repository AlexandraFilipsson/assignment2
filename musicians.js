//index bara grundnavigering
//Band.js och musician.js ska hålla information om alla objekt och ansvarar för att läsa in alla objekt som är sparade in JSON-filen.
//Ska finnas metoder i js-filerna låter mig skriva ut varje enskilt objelt.

import fs from "fs";
import band from ".musicians.js";

export default class musicianList {
  #musicianList = []; // Lista som håller alla band-objekt.

  constructor() {
    this.#fetchMusicianList(); //???Varför error?
  }

  get musicianList() {
    return this.#musicianList;
  }

  // Läser in alla band från "json". 
  #fetchmusicianList() {
    const jsonString = fs.readFileSync("band&musicians.json");
    const data = JSON.parse(jsonString);

    // Populerar #bandList med band-objekt, då kommer vi få tillgång till alla metoder i band-klassen.
    for (let i = 0; i < data.length; i++) {
      this.#musicianList.push(new Band(data[i].name, data[i].currentMember));
    }
  }

  //Skriver ut index och band-objektens namn 
  WriteBand() {
    for (let i = 0; i < this.#musicianList.length; i++) {
      console.log(`${i + 1}. ${this.#musicianList[i].name}`);
    }
  }

  WriteBandCurrentActive() {
    for (let i = 0; i < this.#musicianList.length; i++) {
      console.log(`${i + 1}. ${this.#musicianList[i].name} -> ${this.#musicianList[i].checkedIn}`);
    }
  }


  addBandToList(name) {
    this.#musicianList.push(new musician(name)); // Lägger till ett nytt band i #bandList.
    this.#updateJsonFile(); // Uppdaterar "band&musicians.json".
  }

  removeMusicianFromList(index) {
    this.#musicianList.splice(index, 1); // Tar bort ett band ifrån #bandList.
    this.#updateJsonFile(); // Uppdaterar "band&muscians.json".
  }

  #updateJsonFile() {
    let tempList = []; // Skapar en temporär lista som ska sparas i "hundar.json".

    for (let i = 0; i < this.#musicianList.length; i++) {
      // Använder dataInfo som ger mig ett nytt objekt med alla hund-objektet egenskaps information.
      // Om vi sparar hund-objektet direkt, kommer inte informationen från privata egenskaper med.
      tempList.push(this.#musicianList[i].dataInfo());
    }

    fs.writeFileSync('./bands&musicians', JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  WriteMusicianCurrentActive(index) {
    this.#musicianList[index].WriteBandNotActive(); // Ändrar så ett band blir aktiv  eller inaktiv.  
    this.#updateJsonFile();
  }

  getLength() {
    return this.#musicianList.length;
  }

{ }
const James = {
  firstName: 'James',
  lastName: 'Hetfield',
  age: 2023 - 1963,
  band: 'Metallica',
}
console.log(James);
console.log(James.lastName);

} 