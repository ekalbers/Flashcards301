//Create array with states and capitals
const stateCapitals = [  ["Alabama", "Montgomery"],
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

//Array for 
const presidents = [  ["1st", "George Washington"],
  ["2nd", "John Adams"],
  ["3rd", "Thomas Jefferson"],
  ["4th", "James Madison"],
  ["5th", "James Monroe"],
  ["6th", "John Quincy Adams"],
  ["7th", "Andrew Jackson"],
  ["8th", "Martin Van Buren"],
  ["9th", "William Henry Harrison"],
  ["10th", "John Tyler"],
  ["11th", "James K. Polk"],
  ["12th", "Zachary Taylor"],
  ["13th", "Millard Fillmore"],
  ["14th", "Franklin Pierce"],
  ["15th", "James Buchanan"],
  ["16th", "Abraham Lincoln"],
  ["17th", "Andrew Johnson"],
  ["18th", "Ulysses S. Grant"],
  ["19th", "Rutherford B. Hayes"],
  ["20th", "James A. Garfield"],
  ["21st", "Chester A. Arthur"],
  ["22nd", "Grover Cleveland"],
  ["23rd", "Benjamin Harrison"],
  ["24th", "William McKinley"],
  ["25th", "Theodore Roosevelt"],
  ["26th", "William Howard Taft"],
  ["27th", "Woodrow Wilson"],
  ["28th", "Warren G. Harding"],
  ["29th", "Calvin Coolidge"],
  ["30th", "Herbert Hoover"],
  ["31st", "Franklin D. Roosevelt"],
  ["32nd", "Harry S. Truman"],
  ["33rd", "Dwight D. Eisenhower"],
  ["34th", "John F. Kennedy"],
  ["35th", "Lyndon B. Johnson"],
  ["36th", "Richard Nixon"],
  ["37th", "Gerald Ford"],
  ["38th", "Jimmy Carter"],
  ["39th", "Ronald Reagan"],
  ["40th", "George H. W. Bush"],
  ["41st", "Bill Clinton"],
  ["42nd", "George W. Bush"],
  ["43rd", "Barack Obama"],
  ["44th", "Donald Trump"],
  ["45th", "Joe Biden"]
];

//Global Variables
let arrayUsed;
let decks = [];
let i = 0;
let termAnswer = 0;
let chosenDeck = 0;
let deckIndex = 0;

//create decks for initial two decks available
decks.push(new createDeck('stateCapitals',stateCapitals));
decks.push(new createDeck('presidents',presidents));

//populate decks from above arrays and local storage
populateDecks();

//set the starting deck to state capitals
findDeck('stateCapitals');
arrayUsed = decks[deckIndex].terms;

//constructor function for decks
function createDeck(name, array) {
  this.name = name;
  this.terms = array;
  this.totalCards = array.length;
}

//Populate Decks held in locatStorage
function populateDecks() {
  let y = [];
  for (let x = 0; x < localStorage.length; x ++) {
    y.push(localStorage.key(x));
  }
  for (let x = 0; x < localStorage.length; x++) {
    let array = localStorage.getItem(y[x]);
    decks.push(new createDeck(y[x],JSON.parse(localStorage.getItem(y[x]))));
    addDeckToSelector(y[x]);
  }
}

//moves card when right arrow key is pressed
function cardForward(array) {
  termAnswer = 0;
  if (i == array.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById('flashcards').className = 'front';
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
  document.getElementById('flashcards').className = 'front';
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//flips card when up/down arrows are pressed or spacebar
function flipCard(array) {
  if (termAnswer == 0) {
    termAnswer++;
    document.getElementById('flashcards').className = 'back';
  } else {
    termAnswer--;
    document.getElementById('flashcards').className = 'front';
  }
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//adds term from form on html page
function addToDeck() {
  let deck = document.getElementById("deck").value;
  findDeck(deck);
  if(deckIndex < decks.length) {
    decks[deckIndex].terms.push([document.getElementById("term").value, document.getElementById("answer").value]);
    localStorage.setItem(decks[deckIndex].name, JSON.stringify(decks[deckIndex].terms));
  } else {
    decks.push(new createDeck(deck,[[document.getElementById("term").value, document.getElementById("answer").value]]));
    addDeckToSelector(deck);
  }
  arrayUsed = decks[deckIndex].terms;
  printNewCard(arrayUsed);
  document.getElementById('term').value = '';
  document.getElementById('answer').value = '';
}

//prints the newest card submitted to html page
function printNewCard(array) {
  i = array.length;
  i--;
  termAnswer = 0;
  document.getElementById('flashcards').className = 'front';
  document.getElementById("flashcards").innerHTML = array[i][termAnswer];
}

//clears deck after button click on html page
function clearDeck() {
  localStorage.clear();
  arrayUsed = stateCapitals;
  i = 0;
  termAnswer = 0;
  document.getElementById('flashcards').className = 'front';
  document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];
}

//checking to see if there is already locally stored information to use for a flashcard deck

//set the deck based on button clicked on HTML page
function setDeck(string) {
  console.log(decks);
  findDeck(string);
  i = 0;
  termAnswer = 0;
  arrayUsed = decks[deckIndex].terms;
  document.getElementById('flashcards').className = 'front';
  document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];
}

function findDeck(string) {
  deckIndex = 0;
  while (deckIndex < decks.length && decks[deckIndex].name !== string) {
    deckIndex++;
  } 
}

function addDeckToSelector (deckName) {
  let div = document.getElementById('newDecks');
  let newButton = document.createElement('button');
  newButton.innerHTML = deckName;
  newButton.id = 'decks';
  newButton.type = 'button';
  newButton.setAttribute('onclick','setDeck(\''+deckName+'\')');
  div.appendChild(newButton);
  console.log('button added');
}

//display intitial flashcard in the deck
document.getElementById("flashcards").innerHTML = arrayUsed[i][termAnswer];

//event listener for navigating through flashcards
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
