import Musician from './musician.js';
import Band from './bands.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musicianList = new Musician();
  // const bandList = new Band(); DETTA FUNKAR INTE! VARFÖR??

  console.log(`
    Menu for band
  1. Add a new musician
  2. Show a musician 
  3. Create a band
  4. Add a new band
  5. Remove a band
 `)

  //looopa igenom hela listan - välj en

  // 2. Remove an musician funkar fram till att jag skriver ut ett namn. 
  const options = prompt();
  switch (options.trim()) {
    case "1":
      console.log("What is the musicers name?");
      const someName = prompt();
      console.log("What year was the musicers born?");
      const birthyear = prompt();
      //     console.log("How old is the musician?");
      //   console.log(musicianList.birthyearToAge(birthyear));
      console.log("What instrument does the musicer play?");
      const instrument = prompt();
      musicianList.addMusicianToList(someName, birthyear, instrument);
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

    case "3":
      if (musicianList.getLength() === 0) {
        console.log('Du kan inte skapa ett band innan du har en musiker');
      } else {
        musicianList.displayAllMusicians()
        const options = prompt('Välj din första medlem'); //skriv text inne i()
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('Valet finns inte');
        } else {
          const bandName = prompt('Vad heter bandet?');
          const created = prompt('När skapades bandet?(yyyymm)');
          const instrument = prompt('Vilket instrument spelar musikern?');
          musicianList.createBand(options, bandName, created, instrument);
        }
      }
      break;
  }
}
