//Create array with states and capitals
console.log("beginning");
const stateCapitalsArray = [  ["Alabama", "Montgomery"],
  ["Alaska", "Juneau"],
  ["Arizona", "Phoenix"],
  ["Arkansas", "Little Rock"],
  ["California", "Sacramento"],
  ["Colorado", "Denver"],
  ["Connecticut", "Hartford"],
  ["Delaware", "Dover"],
  ["Florida", "Tallahassee"],
  ["Georgia", "Atlanta"],
  ["Hawaii", "Honolulu"],
  ["Idaho", "Boise"],
  ["Illinois", "Springfield"],
  ["Indiana", "Indianapolis"],
  ["Iowa", "Des Moines"],
  ["Kansas", "Topeka"],
  ["Kentucky", "Frankfort"],
  ["Louisiana", "Baton Rouge"],
  ["Maine", "Augusta"],
  ["Maryland", "Annapolis"],
  ["Massachusetts", "Boston"],
  ["Michigan", "Lansing"],
  ["Minnesota", "Saint Paul"],
  ["Mississippi", "Jackson"],
  ["Missouri", "Jefferson City"],
  ["Montana", "Helena"],
  ["Nebraska", "Lincoln"],
  ["Nevada", "Carson City"],
  ["New Hampshire", "Concord"],
  ["New Jersey", "Trenton"],
  ["New Mexico", "Santa Fe"],
  ["New York", "Albany"],
  ["North Carolina", "Raleigh"],
  ["North Dakota", "Bismarck"],
  ["Ohio", "Columbus"],
  ["Oklahoma", "Oklahoma City"],
  ["Oregon", "Salem"],
  ["Pennsylvania", "Harrisburg"],
  ["Rhode Island", "Providence"],
  ["South Carolina", "Columbia"],
  ["South Dakota", "Pierre"],
  ["Tennessee", "Nashville"],
  ["Texas", "Austin"],
  ["Utah", "Salt Lake City"],
  ["Vermont", "Montpelier"],
  ["Virginia", "Richmond"],
  ["Washington", "Olympia"],
  ["West Virginia", "Charleston"],
  ["Wisconsin", "Madison"],
  ["Wyoming", "Cheyenne"]
];
console.log("array");

let i = 0;
let stateCaptial = 0;
console.log("variable created");

do {
    console.log("beginning of loop");
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
          case "ArrowLeft":
            console.log("Left arrow key pressed");
            break;
          case "ArrowRight":
            console.log("Right arrow key pressed");
            break;
          case "ArrowUp":
            console.log("Up arrow key pressed");
            break;
          case "ArrowDown":
            console.log("Down arrow key pressed");
            break;
        }
      });
} while (i <= 49);

/*function createFlahscard() {
    let flashcardDiv = document.getElementById('flashcard');
    

}

function cardForward() {
    
}

function cardBack() {

}
 function flipCard() {

 }*/