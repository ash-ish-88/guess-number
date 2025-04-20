let randomNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];    // it store the previous guess
let numGuess = 1;     //start from 1

let playGame = true;  // check you are able to play or not

if(playGame)
{
  submit.addEventListener('click',function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess)
{
  if(isNaN(guess))
  {
    alert('Please enter a valid number');
  }
  else if(guess < 1)
  {
    alert('Please enter a number more than one')
  }
  else if(guess>100)
  {
    alert('Please enter a number less than hundred')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11)
    {
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

 function checkGuess(guess)
 {
  if(guess === randomNumber)
  {
    displayMessage('You guessed it right')
  }
  else if(guess < randomNumber)
  {
    displayMessage(`Number is too low`)
  }
  else if(guess > randomNumber)
  {
    displayMessage(`Number is too high`)
  }
 }

 function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${10 - (numGuess - 1)}`;


 }
 function displayMessage(message) {
   lowOrHi.innerHTML = `<h3>${message} </h3>`;
 }
 function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h3 id = "newGame">Start new Game </h3>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
 }

 function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - (numGuess - 1)}`;

    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
 }

