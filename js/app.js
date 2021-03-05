
const keyBoard = document.getElementById('qwerty');       
const phrase = document.getElementById('phrase');          
const startButton = document.querySelector("a");        
let score = 0;                                                

const phraseArr = [ 
    "Ba Ram You",
    "These are not the droids youre looking for",
    "Lannisters always pay their debts",
    "One Ring to rule them all",
    "Buy the ticket take the ride"
]

startButton.addEventListener("click", () => {                                 
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
        overlay = document.getElementById('overlay');                          
        overlay.style.display = "none" 
        getRandomPhraseArray(phraseArr);
        addPhraseToDisplay(letters)
    }});
//return random phrase from array step 2
const getRandomPhraseArray = phraseArr => {
    randomKey = Math.floor(Math.random() * 5);
    randomPhrase = phraseArr[randomKey];  
    letters = [...randomPhrase]            

               
};
function addPhraseToDisplay(letters) {                     
    for (let i = 0; i < letters.length; i++) {   
       let ul = document.getElementById("letterboxes")              
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






