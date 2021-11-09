'use strict';

// Seleccionando elementos
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
let currentScore0 = document.querySelector("#current--0");
let currentScore1 = document.querySelector("#current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

// Starting conditions
diceEl.classList.add("hidden");

    // Resetea el score actual

    function resetCurrentScore(){
        currentScore0.textContent = "0";
        currentScore1.textContent = "0";
    }
    resetCurrentScore();
    
    function resetScore() {
        score0El.textContent = "0";
        score1El.textContent = "0";
    }
    resetScore();

    function resetAll(){
        resetCurrentScore();
        resetScore();
        activePlayer = 0;
    }
    
    //Se guardarán los scores totales dentro del siguiente array
    const scores = [0, 0]
let diceNumber;
let diceImage;
let currentScore = 0;
let activePlayer = 0;

btnNew.addEventListener("click", resetAll);
btnHold.addEventListener("clik", function (){
    
})


// Tira los dados
btnRoll.addEventListener("click", function(){
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage =`dice-${diceNumber}.png`
    diceEl.setAttribute("src", diceImage);
    diceEl.classList.remove("hidden");
    console.log(diceImage);

    if (diceNumber !== 1) {
        // add dice to current score
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;       
        
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0; 
        //swtich to the next player
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1:0; //si active player es igual a 0 entonces cambia su valor a 1, sino lo cambia a 0
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
    
})


/*

// Muestra el score actual
function displayCurrentScore(){
    document.querySelector(".currentScore").textContent = currentScore;
}



// function 2
document.querySelector(".btn--hold").addEventListener("click", function(){
    displayCurrentScore();
    if (currentPlayerScore <= 100) {

    } else {

    }
})


// function 3
*/
