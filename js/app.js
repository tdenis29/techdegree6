// Global Variables 
const keyBoard = document.getElementById('qwerty');       //Keys user selects
const phrase = document.getElementById('phrase');          //random phrase to guess
const startButton = document.querySelector("a"); 
         //reset/start the game 
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
    if (startButton.textContent == "Success"){
     score = 0;
     let imgReset = document.querySelectorAll('.tries img');
     imgReset.forEach(imgReset => {
     imgReset.src = 'images/liveHeart.png';
     });
     const ul = document.querySelector('ul');
     ul.innerHTML = '';
     qwertyButtons = qwerty.querySelectorAll('button');
     qwertyButtons.forEach(button => {
       button.removeAttribute('disabled');
       button.classList.remove('chosen');
     });
     overlay.style.display = 'none';
     overlay.classList.remove('win');    
     overlay.classList.add("start");
     phraseArray = getRandomPhraseArray(phraseArr);
     addPhraseToDisplay(letters);
     
    } else if (startButton.textContent == "Failure"){
        score = 0;
        let imgReset = document.querySelectorAll('.tries img');
        imgReset.forEach(imgReset => {
        imgReset.src = 'images/liveHeart.png';
        });
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        qwertyButtons = qwerty.querySelectorAll('button');
        qwertyButtons.forEach(button => {
          button.removeAttribute('disabled');
          button.classList.remove('chosen');
        });
        overlay.style.display = 'none';
        overlay.classList.remove('lose');    
        overlay.classList.add("start");
        getRandomPhraseArray(phraseArr);
        addPhraseToDisplay(letters);
        
    } else {
        overlay = document.getElementById('overlay');                          //grab overlay
        overlay.style.display = "none" 
        getRandomPhraseArray(phraseArr);
        addPhraseToDisplay(letters)
    }});
//return random phrase from array step 2
const getRandomPhraseArray = phraseArr => {
    randomKey = Math.floor(Math.random() * 5);//random number between 1-5
    randomPhrase = phraseArr[randomKey];   //selects phrase from array using key
    letters = [...randomPhrase]            //turn phrase into array of characters

               
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
    header = document.querySelector("#banner, h2")
    if (showList.length === letterList.length) {  
     overlay.classList.remove('start');
     overlay.classList.add("win");
     header.textContent = "YOU WON";
     overlay.style.display = "flex";
     startButton.textContent = "Success"
    }  else if ( score > 4) {
        overlay.classList.remove('start');    
        overlay.classList.add("lose");
        header.textContent = "YOU LOSE HAHA"
        overlay.style.display = "flex";
        startButton.textContent = "Failure"
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
        } if ((button.target.textContent.toLowerCase() === checkMatch[i].textContent.toLowerCase())) {
            checkMatch[i].classList.add("showtime");
        }
    }  
  } if (letterFound === null) {
    lives[score].src= "images/lostHeart.png";
    score++;
}
 checkWin(); 
});






