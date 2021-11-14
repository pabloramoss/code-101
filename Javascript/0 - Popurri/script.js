'use strict';
console.log('hola');

//Current day
let currentDay;
let currentHour;
let today = new Date();
let hour;
let todayDate = `${today.getDate()}/${today.getMonth()+1}/${today.getYear()-100+2000}`;
//Fecha
document.querySelector('#date-today').textContent = todayDate;
//Hora
document.querySelector('#button-hour').addEventListener('click', function (){
    today = new Date();
    hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:`;
    document.querySelector('#current-hour').textContent = hour;
})
//Adivina el numero
let guessNumber = Math.trunc(Math.random()*10)+1;
let guessing;
let intentoCount = 0;
let playing = true;
console.log(guessNumber);
document.querySelector('#guess-number').addEventListener('click', function(){
    guessing = document.querySelector('#guessing').value;
    if(guessing == guessNumber) {
        playing = false;
        document.querySelector('#adivina').textContent = 'ADIVINASTE CABRÓN';
        document.querySelector('#guessing').setAttribute("disabled", "");
    }else {
        intentoCount += 1;
        document.querySelector('#adivina').textContent = `Sigue intentando. Intento ${intentoCount}`;
    }
})
//Cuenta regresiva en dias monitor 144
let then = new Date(2020, 12, 04); 
let now  = new Date;

// 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
let diasMonitor = Math.round((now - then) / (1000 * 60 * 60 * 24));
document.querySelector('#dias-monitor').textContent = `En ${diasMonitor} días tengo monitor nuevo`;

