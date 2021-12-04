const phrase = prompt('ingrese la frase ')
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let verify = true;

const detectLetter = alphabet.map((letter)=>{
  verify = phrase.includes(letter)
})

if(verify){
  console.log('la frase SI es un pangram')
}else{
  console.log('la frase NO es un pangram')

}

detectLetter
