import Musician from "./musicians.js";

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musicianList = new Musician();
  console.log(`
    Menu for band
  1.  Add a new musicer
 `)

  const options = prompt();
  switch (options.trim()) {
    case "1":
      console.log("What is the musicers name?");
      const musiciansName = prompt();
      console.log("What year was the musicers born?");
      const birthyear = prompt();
      //     console.log("How old is the musician?");
      //   console.log(musicianList.birthyearToAge(birthyear));
      console.log("What instrument deos the musicer play?");
      const instrument = prompt();
      musicianList.addMusicianToList(musiciansName, birthyear, instrument);
      break;

  }

}



