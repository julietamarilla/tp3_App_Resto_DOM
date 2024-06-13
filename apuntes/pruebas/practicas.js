let tarjetaCapturada = document.getElementById("card")
//--------------- getElementById------
console.log ("MUESTRO EN CONSOLA TODO EL CONTENIDO DE CARD INCLUSIVE LA PROMER ETIQUETA")
console.log(tarjetaCapturada)

console.log ("MUESTRO TODO EL CONTENIDO DE CARD, INCLUYENDO LOS ESPACIOS DE INDETANDO")
console.log(tarjetaCapturada.innerHTML)

console.log ("MUESTRA EN CONSOLA SOLO EL TEXTO CONTENIDO EN CARD")
console.log(tarjetaCapturada.innerHTML)

//-----------querySelector-----------
let capturaQuery = document.querySelector(".texto1")
console.log ("muestro capturaQuery")
console.log(capturaQuery.innerText)

//-----------querySelectorAll-----------
// let capturaQueryAll = document.querySelectorAll("li")
// console.log ("muestro capturaQuery TODOS")
// console.log(capturaQueryAll[2].innerText)

let capturaQueryAll = document.querySelectorAll("li")

capturaQueryAll.forEach((elemento) => {
console.log(elemento);
});
