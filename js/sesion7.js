'use strict'
/* Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original. */
function flatten(arrays) {
    // reto 1
    let newArr = [];
    for (let index = 0; index < arrays.length; index++) {
        newArr.push(...arrays[index]);
    }

    return newArr;
}

// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]
// console.log(arrays);

/* Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy. */
function compact(array) {
    //reto 2
    return array.filter((element) => (element));
}

// const array = [0, 1, false, 2, '', 3];
// const compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

/*
Crear una función de alto orden loop que será similar a un for.

Recibe tres argumentos: start, una función test, una función update y una función body.

El ciclo empieza en start y termina cuando test retorne false.
En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
Al final de cada ciclo se ejecuta la función update.
 */

function loop(start, test, update, body) {
    for(let i=start; test(i); i=update(i)){
        body(i);
    }
}

const test = function (n) {
    return n > 0;
}

const update = function (n) {
    return n - 1;
}

loop(3, test, update, console.log);
  // 3
  // 2
  // 1
