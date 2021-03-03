// Global Variables 
const keyBoard = document.getElementById('qwerty');       //Keys user selects
const phrase = document.getElementById('phrase');          //random phrase to guess
const startButton = document.querySelector("a");          //reset/start the game 
let score = 0;                                                //score

const phraseArr = [ 
    "Ba Ram You",
    "These are not the droids youre looking for",
    "Lannisters always pay their debts",
    "One Ring to rule them all",
    "Buy the ticket take the ride"
]
//listen for start button to fire step 1
startButton.addEventListener("click", () => {                                //activate 
    overlay = document.getElementById('overlay');                          //grab overlay
    overlay.style.display = "none"                                               // hide on click
    });

//return random phrase from array step 2
const getRandomPhraseArray = phraseArr => {
    randomKey = Math.floor(Math.random() * 5);//random number between 1-5
    randomPhrase = phraseArr[randomKey];   //selects phrase from array using key
    letters = [...randomPhrase]            //turn phrase into array of characters
    return letters;                  
};


// add the letters of a string to the display step 3
function addPhraseToDisplay(letters) {                     
    for (let i = 0; i < letters.length; i++) {   
       let ul = document.getElementById("letterboxes")              //loop through array
       letterBox = document.createElement('li');
       letterBoxText = document.createTextNode(letters[i]);
       letterBox.appendChild(letterBoxText);
       ul.appendChild(letterBox);
        if (letters[i] === " ") {
          letterBox.className = "space"
        } else {
            letterBox.className = "letter"
        }
    }
}
//NEED HELP HERE call back for checkLettewr is at bottom of file
// listen for keyboard clicks and compare input to li step 5

const checkLetter = button => { //the parameter should be something else ?
    button.target.className = "chosen";
    let checkLetter = document.querySelectorAll(".letter");
    let match;//intialize match 
    for (let i = 0; i < checkLetter.length; i++) {
        if (button.target.textContent.toLowerCase() === checkLetter[i].textContent.toLowerCase()) {//loop through li until button target is found
            checkLetter[i].classList.add("show");  //add show to matches so they appear on gameboard
            match += button.textContent; //update match variable with button text value
            console.log(match) //debug
        } else {
            score += 1;//score counter
            console.log(score)
            console.log('lose life')// debug
            return score // return falsey so score doesnt run up for each item in collection that doesnt match
        }
    } return match                        //return match after loop 
}  

//Check letter kinda works but the loop only logs one match out of mutiple or not at all in the case of A

//check if game has been won or lost step 6
const checkWin = () => {
let header = document.getElementById("header");
if (letterGuessed.length === letterBox.length) {
 overlay.className = "win";
 header.innerHTML = "YOU WON";
 overlay.style.display = "flex";
}  else if ( score = 0) {
    overlay.className = "lose"
    header.innerHTML = "YOU LOSE HAHA"
    overlay.style.display = "flex";
}
}

getRandomPhraseArray(phraseArr);
addPhraseToDisplay(letters)
qwerty.addEventListener('click', (button) => {
    checkLetter(button)
  });