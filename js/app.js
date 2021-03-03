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

// listen for keyboard clicks and compare input to li step 4
// qwerty.addEventListener('click', (button) => {
//     checkMatch = document.querySelectorAll(".letter");
//     let match;
//     for (let i = 0; i < checkMatch.length; i++) {
//         if (button.target.textContent.toLowerCase() === checkMatch.textContent.toLowerCase()) {
//             checkMatch[i].className = "show";
//             match += button.textContent;
//             return match;
//         } else {
//             score--;
//         } 
//     }
// });

// listen for keyboard clicks and compare input to li step 5
qwerty.addEventListener('click', (button) => {
    button.target.className = "chosen";
    checkMatch = document.querySelectorAll(".letter");
    let match;
    for (let i = 0; i < checkMatch.length; i++) {
        if (button.target.textContent.toLowerCase() === checkMatch[i].textContent.toLowerCase()) {
            checkMatch[i].classList.add("show");
            match += button.textContent; 
        } else {
            score += 1;
        }
    } return match 
});

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
