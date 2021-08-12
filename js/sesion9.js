'use strict'
//reto 1
// let arrImgs=document.querySelectorAll("img");

// console.log(arrImgs);
// //reemplazar imagenes por tu atributo alt
// for (let index = 0; index < arrImgs.length; index++) {
//     arrImgs[index].replaceWith(arrImgs[index].getAttribute("alt"));
// }

// console.log(arrImgs);


// //reto 2
// const data = [
//     { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
//     { name: "Everest", height: 8848, place: "Nepal" },
//     { name: "Mount Fuji", height: 3776, place: "Japan" },
//     { name: "Vaalserberg", height: 323, place: "Netherlands" },
//     { name: "Denali", height: 6168, place: "United States" },
//     { name: "Popocatepetl", height: 5465, place: "Mexico" },
//     { name: "Mont Blanc", height: 4808, place: "Italy/France" }
// ];

// let tabla = document.createElement("table");

// data.forEach(element => {
//      let row = document.createElement("tr");
//      let col = `
//      <td>${element.name}</td>
//      <td>${element.height}</td>
//      <td>${element.place}</td>`;
//      row.innerHTML=(col);
//      tabla.append(row);
// });

// document.querySelector("#mountains").appendChild(tabla);
var numFilas = 10;
var numColumnas = 10;
let div_principal = document.querySelector("#content");

div_principal.style.gridTemplateColumns="repeat("+numColumnas+", 1fr)";
div_principal.style.gridTemplateRows="repeat("+numFilas+", 1fr)";

for (let index = 1; index <= (numFilas*numColumnas); index++) {
    let div_hijo=document.createElement("div");
    div_hijo.innerText=index;
    div_principal.appendChild(div_hijo);
}

let numrand_inicio = getRandomArbitrary(0, numFilas*numColumnas);
console.log(numrand_inicio);

// for (let index = 1; index < (numFilas*numColumnas); index=index+(numFilas)) {
//     console.log(index);
// }


// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(a, b) {
    let num=Math.round(Math.random()*(b-a)+parseInt(a));
    if(num%(numFilas)==0){
        return num+1;
    }else{
        return getRandomArbitrary(a, b);
    }
}