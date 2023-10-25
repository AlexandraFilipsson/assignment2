import Musician from './musician.js';
import Band from './bands.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musicianList = new Musician();


  console.log(`
    Menu options:
  1. Add a new musician
  2. Show musician 
  3. Create a bandmember
  4. Show bandmember
  5. Remove a band
 `)

  //looopa igenom hela listan - välj en

  // 2. Remove an musician funkar fram till att jag skriver ut ett namn. 
  const options = prompt();
  switch (options.trim()) {
    case "1":
      console.log("What is the musicers name?");
      let someName = prompt();
      console.log("What year was the musicers born?");
      const birthyear = prompt();
      //     console.log("How old is the musician?");
      //   console.log(musicianList.birthyearToAge(birthyear));
      console.log("What instrument does the musicer play?");
      let instrument = prompt();
      console.log("Info about the musicer?");
      const info = prompt();
      musicianList.addMusicianToList(someName, birthyear, instrument, info);
      break;

    case "2":
      if (musicianList.getLength() === 0) {
        console.log('Det finns inget i listan');
      } else {
        musicianList.displayAllMusicians()
        const options = prompt();
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('Valet finns inte');
        } else {
          musicianList.displayOneMusicians(options);
        }
      }
      break;
    //ÄNDRA TILL ENGELSKA PÅ STRANGARNA!!!!!
    case "3":
      if (musicianList.getLength() === 0) {
        console.log('You can not creat a new band before you have a musician');
      } else {
        musicianList.displayAllMusicians()
        let options = prompt('Add your first bandmember'); //skriv text inne i()
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('The option does not exist');
        } else {
          let bandName = prompt('What is the name of the band?');
          let created = prompt('When was the band created?(yyyymm)');
          let instrument = prompt('What instrument does the musician play?');
          console.log("Info about the musicer?");
          let info = prompt();
          musicianList.createBand(options, bandName, created, instrument, info);
        } //använd let istället för const???
      }

  }
}