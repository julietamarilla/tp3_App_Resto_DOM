let listaD = document.createElement("ul");
document.body.appendChild(listaD);

let itemLista1 = document.createElement("li");
itemLista1.textContent = "Mucha tos en el aula";

let itemLista2 = document.createElement("li");
itemLista2.textContent = "Nos vamos a enfermar todos";

let salto = document.createElement("hr");

let item3 = document.createElement("li");
item3.textContent = "Y se viene el finde largoo!!";

listaD.appendChild(itemLista1);
listaD.appendChild(itemLista2);
listaD.appendChild(salto);
listaD.appendChild(item3);

//------aca selecciono el footer------
let futer = document.getElementById("piepagina");
futer.appendChild(listaD);
//futer.style.backgroundColor = "violet"
item3.style.fontFamily = "Impact"
futer.style.padding = "1rem"
futer.style.boxShadow = "0 0 15px -5px black"

let hacheTres = document.querySelector("h3");
//hacheTres.classList.add("subrayado");

let itemLista5 = document.querySelectorAll("li");
itemLista5[4].classList.remove("texto1");

function agregar(){
    hacheTres.classList.add("subrayado")
}

function remove(){
    hacheTres.classList.remove("subrayado")
}

let menuLateral = document.querySelector("aside")


function mostrarMenu(){
    menuLateral.classList.toggle("mostrar")
}