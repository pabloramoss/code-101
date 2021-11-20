//let sonidos = document.getElementsByTagName("audio");
//let caja_sonidos = document.getElementsByClassName("caja-sonido");

let sonidos = document.querySelectorAll('button');
console.log(sonidos);
let

for(let i = 0; i < caja_sonidos.length; i++){
	caja_sonidos[i].addEventListener("click", function(){
		sonidos[i].play();
		caja_sonidos[i].style.backgroundColor = '#DB8000';
		caja_sonidos[i].style.transform = 'scale(.9)';
		caja_sonidos[i].style.transition = 'all .1s';
	});