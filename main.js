import Musician from "./musicians.js";

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musicianList = new Musician();
  // const bandList = new Band(); DETTA FUNKAR INTE! VARFÖR??

  console.log(`
    Menu for band
  1. Add a new musician
  2. Remove a musician 
  3. Add a new band
  4. Remove a band
 `)

  // 2. Remove an musician funkar fram till att jag skriver ut ett namn. 
  const options = prompt();
  switch (options.trim()) {
    case "1":
      console.log("What is the musicers name?");
      const musiciansName = prompt();
      console.log("What year was the musicers born?");
      const birthyear = prompt();
      //     console.log("How old is the musician?");
      //   console.log(musicianList.birthyearToAge(birthyear));
      console.log("What instrument does the musicer play?");
      const instrument = prompt();
      musicianList.addMusicianToList(musiciansName, birthyear, instrument);
      break;

  }
  switch (options.trim()) {
    case "2":
      console.log("What is the name of the musician would you like to remove?");
      const musiciansName = prompt();
      musicianList.addMusicianToList(musiciansName, birthyear, instrument);
      break;

  }
  switch (options.trim()) {
    case "3":
      console.log("What is the name of the band?");
      const bandName = prompt();
      bandList.addBandToList(bandformed, disbandment);
      break;

  }
  switch (options.trim()) {
    case "4":
      console.log("Which band would you like to remove?");
      const bandName = prompt();
      bandList.addBandToList(bandformed, disbandment);
      break;

  }


}

