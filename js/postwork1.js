'use strict'

//window.addEventListener('load', function () {


//Programa 2
// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// //                                                                                   ----Tamaño / rebanadas = arreglos a crear
 //console.log('Test 1:',chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]    ---- 8/1 = 8

// console.log('Test 2:',chunk(data, 2)); // [ [1, 2], [3, 4], [5, 6], [7, 8] ]            ---- 8/2 = 4 -> 4

// console.log('Test 3:',chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]              ---- 8/3 = 2.6 -> 3

// console.log('Test 4:',chunk(data, 4)); // [[1, 2, 3, 4,], [5, 6, 7, 8]]               ---- 8/4 = 2 -> 2

// console.log('Test 5:',chunk(data, 5)); // [ [1, 2, 3, 4, 5], [6, 7, 8] ]                ---- 8/5 = 1.6 -> 2

// console.log('Test 6:',chunk(data, 6)); // [ [1, 2, 3, 4, 5, 6], [7, 8] ]                ---- 8/6 = 1.3 -> 2

// console.log('Test 7:',chunk(data, 7)); // [[1, 2, 3, 4, 5, 6, 7], [8]]                ---- 8/7 = 1.1 -> 2

// console.log('Test 8:',chunk(data, 8)); // [[1, 2, 3, 4, 5, 6, 7, 8]]                  ---- 8/8 = 1 -> 1


//Ejercicio 3
console.log('Test 1:', frequency('cccbbbaaa'));
// // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'));
// // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}    
console.log('Test 3:', frequency('john.doe@domain.com'));

console.log('Test 4:', frequency('Ethien y Erandi son lo maximo (Hola caro)'));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}

// //console.log(frequency("    www.bedu.org"));


//});


function frequency(string) {
    // //eliminamos los espacios exteriores del string
    // string = string.trim();
    // //pasamos el string a minusculas
    string = string.toLowerCase();

    var  object_account = {};
    for (let char in string) {
        if (string[char] in object_account) {
            object_account[string[char]] ++;
        } else {
            object_account[string[char]] = 1;
        }
    }
    return object_account;
}

function chunk(array, size) {

    // Tamaño del arreglo
    let tamanio_arr = array.length;

    //si el numero de "mini aarreglos es mayor al tamaño del arreglo" se retorna 
    if (size > tamanio_arr) {
        return "El numero de rebanadas no puede ser mayor al tamaño del arreglo que es " + tamanio_arr;
    }


    //creamos el numero de arreglos
    var nuevo_array = [];





    //asignamos los arreglos al nuevo array
    for (let i = 0; i < tamanio_arr; i += size) {
        let pedazo = array.slice(i, i + size);
        nuevo_array.push(pedazo);
    }

    return nuevo_array;
};