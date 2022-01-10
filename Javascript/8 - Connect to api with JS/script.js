// Create a request variable and assign a new XMLHttpRequest object to it.
// Creamos una variable llamada "request" y le asignamos un nuevo objeto XMLHttpRequest
var request = new XMLHttpRequest()
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

// Se abre una nueva solicitud, especificando que es una solicitud GET a través del endpoint (URL) y especificando que la solicitud se realizará de forma asíncrona (true)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//onload se ejecuta cuando la solicitud XMLHttpRequest es completada de forma exitosa
request.onload = function () {
  // A partir de aquí comenzamos a acceder a los datos JSON
  var data = JSON.parse(this.response)
  data.map(movie => {
     // Creamos un div con la clase card
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  // Creamos un h1 y seteamos su contenido como movie.title
  const h1 = document.createElement('h1')
  h1.textContent = movie.title

  // Creamos un elemento p y seteamos su contenido como movie.description
  const p = document.createElement('p')
  movie.description = movie.description.substring(0, 300) // Limit to 300 chars
  p.textContent = `${movie.description}...` // End with an ellipses

  // Agregamos las card al div que nombramos como container
  container.appendChild(card)

  // Ahora cada card tiene un elemento h1 y un p
  card.appendChild(h1)
  card.appendChild(p)
  })
}

// Enviamos el request
request.send()


//También podemos utilizar el método fetch con async/await
/*
function getData() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
}
*/


