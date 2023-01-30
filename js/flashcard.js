let newCardArray = [];
let i = 0;
let termAnswer = 0;
let arrayUsed = [];

//Create array with states and capitals
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

function cardForward(array) {
  termAnswer = 0;
  if (i == array.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

function cardBack(array) {
  termAnswer = 0;
  if (i == 0) {
    i = array.length -1;
  } else {
    i--;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

function flipCard(array) {
  if (termAnswer == 0) {
    termAnswer++;
  } else {
    termAnswer--;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

function addToDeck() {
  let term = document.getElementById("term").value;
  let answer = document.getElementById("answer").value;
  newCardArray.push([term, answer]);
  localStorage.setItem('array', JSON.stringify(newCardArray));
  arrayUsed = newCardArray;

}

function checkStorage() {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem('array'));
  } else {
    return stateCapitalsArray;
  }
}

function clearDeck() {
  localStorage.clear();
  newCardArray.length = 0;
  arrayUsed = stateCapitalsArray;
}

arrayUsed = checkStorage();
console.log(arrayUsed);

document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];

window.alert("-Use your left and right arrows to navigate between cards.\n-Use your up/down arrows or space bar to navigate between front and back of cards.")

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowLeft":
      console.log("Left arrow key pressed");
      cardBack(arrayUsed);
      break;
    case "ArrowRight":
      console.log("Right arrow key pressed");
      cardForward(arrayUsed);
      break;
    case "ArrowUp":
      console.log("Up arrow key pressed");
      flipCard(arrayUsed);
      break;
    case "ArrowDown":
      console.log("Down arrow key pressed");
      flipCard(arrayUsed);
      break;
    case " ":
      console.log("Space key pressed");
      flipCard(arrayUsed);
      break;
    }
  });
