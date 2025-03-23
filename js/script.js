//create global variables

//unordered list of guessed words
const  guessedLettersElement = document.querySelector(".guessed-letters"); 

// button with guess text
const guessButton = document.querySelector(".guess"); 

// text input to guess a letter
const textInput = document.querySelector(".letter"); 

//empty paragraph where word inprogress will appear
const wordInProgress = document.querySelector(".word-in-progress"); 

// paragraph where remianing guesses will display
const remaining = document.querySelector(".remaining"); 

//span inside of paragraph where remaing guesses will appear
const spanRemaining = document.querySelector(".remaining span"); 

//empty paragraph where messages will appear when guessing a letter
const message = document.querySelector(".message"); 

//hidden button that will appear promtping player to play again
const hiddenButton = document.querySelector(".play-again"); 

const word = "magnolia";

//write a function to add placeholders for each letter


const placeholder = function () {
const placeholderLetters = [];
for (const letter of word) {
    console.log(letter)
    placeholderLetters.push ("●");
}
wordInProgress.innerText = placeholderLetters.join("");
};

guesssButton.addEventListener(  "click",  function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log (guess);
    textInput.value="";
    }
  );