'use strict'
window.addEventListener('load', function () {
   /*  Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo*/
   findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

});


//reto 1
function pluck(list, propertyName) {
    /* Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos. 
    var singers = [
        { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
        { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
        { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
        { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
    ];

    
    console.log(pluck(singers, 'name'));
    // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
    
    console.log(pluck(singers, 'band'));
    // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
    
    console.log(pluck(singers, 'born'));
    // [1948, 1950, 1967, 1964]
    */
    let arr=[];
    for (let index = 0; index < list.length; index++) {
        arr.push(list[index][propertyName]);
    }
    return arr;  
}


//reto 2
function formatNumbers(listaNumeros){
     // /* Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, 
    // y retorne un string en forma de número telefónico. */
    // let createPhoneNumber = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
    // formatNumbers(createPhoneNumber);
    if ( listaNumeros.length<10 || listaNumeros.length>10 ) {
        return "Debes introducir 10 numeros";
    }
    let primeros_3_nums=[];
    for (let index = 0; index < 3; index++) {
       primeros_3_nums.push(listaNumeros[index]);
    }
    let siguientes_3_nums=[];
    for (let index = 3; index < 6; index++) {
       siguientes_3_nums.push(listaNumeros[index]);
    }
    let ultimos_4_nums=[];
    for (let index = 6; index < listaNumeros.length; index++) {
       ultimos_4_nums.push(listaNumeros[index]);
    }
    
    let template1=`(${primeros_3_nums.toString().split(' , ')}) ${siguientes_3_nums.toString().split(',')}-${ultimos_4_nums.toString().split(',')}`;
   
    
    
    
    return template1;
}


//reto 3
function findMissingNumbers(numsFaltantes){
    let max=Math.max(...numsFaltantes);
    let min=Math.min(...numsFaltantes);
    console.log(max+ " " + min);
    numsFaltantes=numsFaltantes.sort();
    let aux=[];
    for (let index = min; index < max; index++) {
        if(!numsFaltantes.includes(index)){
            aux.push(index);
        }
        
    }
    return console.log(aux);
    
}