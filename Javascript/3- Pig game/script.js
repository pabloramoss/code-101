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
let diceNumber, diceImage, currentScore, activePlayer, playing, scores;

const init = function(){
    // Starting conditions
    diceEl.classList.add("hidden");
    //Se guardarán los scores totales dentro del siguiente array
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active"); //si la clase player--active existe, no la agrega, entonces siempre player 0 sera el primero
    player1El.classList.remove("player--active");
}
init();


const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
        //swtich to the next player
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1:0; //si active player es igual a 0 entonces cambia su valor a 1, sino lo cambia a 0
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

btnNew.addEventListener("click", init);

// Tira los dados
btnRoll.addEventListener("click", function(){
    if (playing){ //no se pone ninguna condition porque playing ya es un booleano, si es true se ejecutara otherwise no

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
            switchPlayer();
        }
    }
})

btnHold.addEventListener("click", function(){
    if (playing){
        scores[activePlayer] += currentScore;
        //score[1] = score[1] = currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 50) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner"); 
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active"); 
            diceEl.classList.add("hidden");

        } else {
            switchPlayer();
        }
    }
});