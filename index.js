// index ska bara fokusera på grundnavigering i detta fall

import PromptSync from "prompt-sync";
import band from "./band.js";
import musician from "./musician.js";

const prompt = PromptSync({ sigint: true })
const BandList = new bands();
const musicianList = new musicians();

let run = true;
while (run) {
  console.log(`
  Menu for band
1.	Add a new band
2.  Add a new bandmember
3.	Remove a band
4.  Remove a bandmember 
5.	Info about the band
6.	Info about the bandmembers
7.	Close the programme

Options -> `);


  const Options = prompt();

  switch (Options.trim().toUpperCase()) {

    case "1":
      BandList.addBandToList(prompt("What is the name of the new band?"));
      break;
    case "2":
      BandMemberList.addBandMemberToList(prompt("What is the name of the new bandmember?"));
      break;
    case "3":
      removeBand();
      break;
    case "4":
      removeBandMember();
      break;
    case "5":
      BandList.InfoBandToList();
      break;
    case "6":
      BandList.InfoBandMembersToList();
      break;
    case "7":
      console.log("Program is closing");
      run = false;
      break;
    default:
      console.log("You need to choose between 1-7");

  }

}
function removeBand() {
  BandList.showAllBands();

  const Options = prompt("Type in index for witch band you would like to remove");

  if (Number(option).toString() === "NaN") {

    console.log("Du måste skriva in ett tal");
  }
  if (option <= BandList.getLength() && option >= 1) {
    BandList.removeBand(Number(option) - 1);
  } else {
    console.log(`Talet måste vara mellan 1 och ${BandList.getLength()}`);
  }
}

//MÅSTE JAG GÖRA EN EXAKT LIKDAN FÖR MEMBERS?!?!?

function checkMenu() {
  let run = true;
  while (run) {
    BandList.showAllBands();
    console.log("B. för att gå tillbaka");
    const option = prompt("Write the xxxx ");

    if (option.trim().toUpperCase() === "B");
    run = false;
  } else if (Number(option).toString() === "NaN") {
    console.log("You have to write a number");
  }
  if (option <= BandList.getLength() && option >= 1) {
    BandList.showAllBands(number(option) - 1);
  } else {
    console.log(`The number needs to be between 1 and ${bandList.getLength()});
      }
    }
   }
