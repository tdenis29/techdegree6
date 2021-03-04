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
//check if game has been won or lost step 6 call at the end of event handler so it runs everytime a letter is clicked
const checkWin = () => {
    letterList = document.querySelectorAll('.letter');
    showList = document.querySelectorAll('.show');
    header = document.querySelector("div, .header")
    endScreen = document.querySelector(".main-container");
    if (showList.length === letterList.length) {  
     endScreen.classList.remove('start');
     endScreen.classList.add("win");
     header.innerHTML = "YOU WON";
     overlay.style.display = "flex";
     startButton.style.display = "block"
    }  else if ( score > 4) {
        endScreen.classList.remove('start');
        endScreen.classList.add("lose");
        header.innerHTML = "YOU LOSE HAHA"
        overlay.style.display = "flex";
        startButton.style.display = "block"
    }};

qwerty.addEventListener('click', (button) => {
    if (button.target.nodeName === "BUTTON"){
    button.target.className = "chosen";
    button.target.disabled = true;
    lives = document.querySelectorAll('.tries img');
    checkMatch = document.querySelectorAll(".letter");
    letterFound = null;
    for (let i = 0; i < checkMatch.length; i++) {
        if (button.target.textContent.toLowerCase() === checkMatch[i].textContent.toLowerCase()) {
            checkMatch[i].classList.add("show");
            letterFound = button.target.textContent.toLowerCase(); 
        } 
    }  
}    if (letterFound === null) {
    checkWin()
    score++
    lives[score].src= "images/lostHeart.png";
} 
});

getRandomPhraseArray(phraseArr);
addPhraseToDisplay(letters);

 



// const checkLetter = buttonClicked => { 
//     let checkLetter = document.querySelectorAll(".letter");
//      match = null;
//     for (let i = 0; i < checkLetter[i].length; i++) {
//         if ( checkLetter[i].textContent.toLowerCase() == buttonClicked.textContent.toLowerCase()) {
//             checkLetter[i].classList.add("show");   
//             letterFound = buttonClicked.textContent.toLowerCase();
//          }  return letterFound 
//     }                         
// }; 
// qwerty.addEventListener('click', (event) => {
    
//     buttonClicked = event.target;
//     if (buttonClicked.nodeName == "BUTTON") {
//     checkLetter(buttonClicked);
//     buttonClicked.className = "chosen";
//   }});
