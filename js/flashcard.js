let newCardArray = checkNewCardArray();
let i = 0;
let termAnswer = 0;
let arrayUsed = [];

checkStorage();
console.log(arrayUsed);

document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];

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

//moves card when right arrow key is pressed
function cardForward(array) {
  termAnswer = 0;
  if (i == array.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//moves card when left arrow key is pressed
function cardBack(array) {
  termAnswer = 0;
  if (i == 0) {
    i = array.length -1;
  } else {
    i--;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//flips card when up/down arrows are pressed or spacebar
function flipCard(array) {
  if (termAnswer == 0) {
    termAnswer++;
  } else {
    termAnswer--;
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//adds term from form on html page
function addToDeck() {
  let term = document.getElementById("term").value;
  let answer = document.getElementById("answer").value;
  newCardArray.push([term, answer]);
  localStorage.setItem('array', JSON.stringify(newCardArray));
  arrayUsed = newCardArray;
  printNewCard(arrayUsed);
  document.newCards.reset();
}

function printNewCard(array) {
  i = array.length;
  i--;
  termAnswer = 0;
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//clears deck after button click on html page
function clearDeck() {
  localStorage.clear();
  newCardArray.length = 0;
  arrayUsed = stateCapitalsArray;
  i = 0;
  termAnswer = 0;
  document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];
}

function checkStorage() {
  if (localStorage.length > 0) {
    arrayUsed = JSON.parse(localStorage.getItem('array'));
  } else {
    arrayUsed = stateCapitalsArray;
  }
}

function checkNewCardArray() {
  if (localStorage.length > 0) {
    return JSON.parse(localStorage.getItem('array')); 
  } else {
    let array = [];
    return array;
  }
}



document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowLeft":
      cardBack(arrayUsed);
      break;
    case "ArrowRight":
      cardForward(arrayUsed);
      break;
    case "ArrowUp":
      flipCard(arrayUsed);
      break;
    case "ArrowDown":
      flipCard(arrayUsed);
      break;
    case " ":
      flipCard(arrayUsed);
      break;
    }
  });
