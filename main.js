import Musician from './musician.js';
import Band from './bands.js';

import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let run = true;
while (run) {
  const musicianList = new Musician();
  const bandList = new Band();

  console.log(`
    Menu options:
  1. Add a new musician
  2. Show musicians 
  3. Create a band
  4. Add a musician to a band 
  5. Remove musician from a band
 `)

  //looopa igenom hela listan - välj en

  // LÄGG TILL SHOW BANDS ?!?!
  const options = prompt();
  switch (options.trim()) {
    case "1":
      console.log("What is the musicians name?");
      let someName = prompt();
      console.log("What year was the musicers born?");
      const birthyear = prompt();
      console.log("What instrument does the musician play?");
      let instrument = prompt();
      console.log("Info about the musician?");
      const info = prompt();
      musicianList.addMusicianToList(someName, birthyear, instrument, info);
      break;

    case "2":
      if (musicianList.getLength() === 0) {
        console.log('There is nothing in the list');
      } else {
        musicianList.displayAllMusicians()
        const options = prompt();
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('Option does not exist');
        } else {
          musicianList.displayOneMusicians(options);
        }
      }
      break;

    case "3":
      if (musicianList.getLength() === 0) {
        console.log('You can not creat a new band before you have a musician: ');
      } else {
        musicianList.displayAllMusicians()
        let options = prompt('Add your first bandmember:'); //skriv text inne i()
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('The option does not exist');
        } else {
          let bandName = prompt('What is the name of the band?: ');
          let created = prompt('When was the band created?(yyyymm): ');
          let instrument = prompt('What instrument does the musician play?: ');
          console.log('Info about the musician? ');
          let info = prompt();
          musicianList.createBand(options, bandName, created, instrument, info);
        } //använd let istället för const???
      } break;
    case "4":
      if (musicianList.getLength() === 0) {
        console.log('This musician does not exist!')
      } else if (bandList.getLength() === 0) {
        console.log('This band does not exist')
      } else {
        musicianList.displayAllMusicians();
        const options = prompt('Which musician would to like to have?: ');
        if (options < 0 || options > musicianList.getLength() || isNaN(options)) {
          console.log('The option does not exist');
        } else {
          const temp = bandList.displayOngoingBand();
          if (temp.lenght === 0) {
            console.log('It does not exist any current band')
          } else {
            const option2 = prompt('What band would you like to have?: ')
            if (option2 < 0 || option2 > temp.lenght || isNaN(option2)) {
              console.log('Option does not exist!');
            } else {
              if (!bandList.bandList[temp[option2].index].CurrentBandMember.some(x => x.memberId === musicianList.musicianList[options].musicianId)) {
                const instrument = prompt('Which instrument does the musician play?: ');
                musicianList.addMusicianToBand(options, instrument, temp[option2].bandId, temp[option2].bandName)
              } else {
                console.log('Musician already exist in the band')
              }
            }
          }
        }
      }
      break;
    case "5":
      if (musicianList.getLength() === 0) {
        console.log('This musician does not exist!')
      } else if (bandList.getLength() === 0) {
        console.log('This band does not exist')
      } else {
        const tempBand = bandList.displayOngoingBand();
        if (tempBand.length === 0) {
          console.log('There are no avalible bands')
        } else {
          const option1 = prompt('Select the band you want to have: ')
          if (option1 < 0 || option1 > tempBand.length || isNaN(option1)) {
            console.log('This option does not exist!')
          } else {
            const tempMusician = bandList.displayCurrentMember(tempBand[option1].index)
            const option2 = prompt('Which musician would you like to remove: ')
            if (option2 < 0 || option2 > tempMusician.length || isNaN(option2)) {
              console.log('This option does not exist!');
            } else {
              musicianList.removeMusician(tempBand[option1].bandId, tempBand[option1].index, tempMusician[option2])
            }

          }
        }
      }
      break;

    default:
      console.log('option does not exist');
  }
}