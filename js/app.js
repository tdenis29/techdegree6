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

 //This code dont work right after i tried to factor it out of the event handler, 
 

const checkLetter = buttonClicked => { 
    let checkLetter = document.querySelectorAll(".letter");
     match = null;
    for (let i = 0; i < checkLetter[i].length; i++) {
        if ( checkLetter[i].textContent.toLowerCase() == buttonClicked.textContent.toLowerCase()) {
            checkLetter[i].classList.add("show");   
            letterFound = button.target.textContent.toLowerCase();
         } else {   
        } return letterFound 
    }                         //return match after loop 
}  


// i need help with the function parameters for checkLetter! it works when i wrote checkLetter in the event handler 
//i read the instructions wrong and and im stuck with this semi working code below
//
// qwerty.addEventListener('click', (button) => {
//     button.target.className = "chosen";
//     checkMatch = document.querySelectorAll(".letter");
//     match = null;
//     for (let i = 0; i < checkMatch.length; i++) {
//         if (button.target.textContent.toLowerCase() === checkMatch[i].textContent.toLowerCase()) {
//             checkMatch[i].classList.add("show");
//             letterFound = button.target.textContent.toLowerCase(); 
//         } else {
            
//         }
//     }  return letterFound
       
// });
getRandomPhraseArray(phraseArr);
addPhraseToDisplay(letters);
 
qwerty.addEventListener('click', (event) => {
    buttonClicked = event.target;
    checkLetter(buttonClicked);
    buttonClicked.className = "chosen";
  });



//I HAVENT RAN THIS YET ITS PROBABLY VERY WRONG
//check if game has been won or lost step 6
const checkWin = () => {
// let header = document.getElementById("header");
// if (letterGuessed.length === letterBox.length) {
//  overlay.className = "win";
//  header.innerHTML = "YOU WON";
//  overlay.style.display = "flex";
// }  else if ( score = 0) {
//     overlay.className = "lose"
//     header.innerHTML = "YOU LOSE HAHA"
//     overlay.style.display = "flex";
// }
}

