// Global Variables 
const keyBoard = document.getElementById('qwerty');       //Keys user selects
const phrase = document.getElementById('phrase');          //random phrase to guess
const startButton = document.querySelector("a");   //reset/start the game 
let score = 0;                                                //score

const phraseArr = [ 
    "Ba Ram You",
    "These are not the droids youre looking for",
    "Lannisters always pay their debts",
    "One Ring to rule them all",
    "buy the ticket take the ride"
]

//return random phrase from array 
const getRandomPhraseArray = arr => {
let randomKey = Math.floor(Math.random() * 5 + 1);                                
console.log(randomKey);
}



//add the letters of a string to the display
const addPhraseToDisplay = arr => {


}

//check if selected letter is in phrase
const checkLetter = button => {

}

//check if game has been won or lost 
const checkWin = () => {

}

//listen for start button to fire 
startButton.addEventListener("click", () => {                                //activate 
const overlay = document.getElementById('overlay');                          //grab overlay
overlay.style.display = "none"                                               // hide on click

});

// listen for keyboard clicks
qwerty.addEventListener('click', (e) => {

});