'use strict'
window.addEventListener('load', function () {

    //reto 1 promedio
    //retoPromedio();

    //reto 2 arreglo a objeto 
    //retoArregloaObjeto();

    //reto 3 extraccion 
    //retoExtraccion();

    //reto final: arreglos y numeros primos
    /*
    Unir el array 1, 2 y 3, para después sumar todos los números 
    que sean primos
     */

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const calificaciones = {
        array3: [11, 12, 13, 14, 15]
    };

    var arr_completo = [...array1, ...array2, ...calificaciones.array3];
    console.log(arr_completo);

    var suma=0;
    //ciclo para ver qué elementos son primos
    for (let index = 0; index <= arr_completo.length; index++) {
        var count = 0;
        for (let jindex = 0; jindex <= arr_completo[index]; jindex++) {
            if (arr_completo[index] % arr_completo[jindex] == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(arr_completo[index] + " Es primo y se suma");
            suma+=arr_completo[index];
        }
    }
    console.log("La suma de los números primos es "+ suma);

    //ciclo para ver si los numeros del 1 al 100 son primos
    // for (let index = 1; index <= 100; index++) {
    //     var count=0;
    //     for(let jindex = 2; jindex<=index; jindex++){
    //         if(index%jindex==0){
    //             count++;                
    //         }
    //     }
    //     if(count<2){
    //         console.log(index+" Es primo");
    //     }


    // }

});

/* reto potencia */
//console.log(power(2,4));
function power(base, exponent) {

    //usando recursividad
    if (exponent == 0) {
        return 1;
    } else if (exponent == 1) {
        return base;
    } else {
        return base * power(base, exponent - 1);
    }


}

function retoPromedio() {
    const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
    var suma = 0;
    for (let index = 0; index < numbers.length; index++) {
        suma = suma + numbers[index];
    }
    var promedio = suma / numbers.length;
    console.log("El promedio es: " + promedio);
}

function retoArregloaObjeto() {
    /* Objeto a arreglo
        const car = {
  brand: 'Nissan',
  model: 'Versa',
  year: 2020
}

const keys = Object.keys(car)
const pairs = []

for(let i = 0; i < keys.length; i++) {
  pairs.push( [keys[i], car[keys[i]]] )
}

console.log(pairs)

// [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
     */

    const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
    var car_objeto = {};
    for (let index = 0; index < car.length; index++) {
        car_objeto[car[index][0]] = car[index][1];
    }
    console.log(car);
    console.log(car_objeto);

    // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
}

function retoExtraccion() {
    const person = {
        firstName: 'John',
        lastName: 'Doe',

        links: {
            web: {
                blog: 'https://johndoe.com'
            },
            social: {
                facebook: 'https://facebook.com/john.doe',
                instagram: 'https://instagram.com/john.doe'
            }
        }
    }
    /* Extraer las URLs de facebook e instagram y 
    renombrar las variables por fb e ig respectivamente.*/
    console.log(person);
    const { firstName, lastName, links } = person;


    const { facebook, instagram } = links.social;
    var fb = facebook;
    var ig = instagram;
    console.log(fb);
    console.log(ig);

    // o bien

    var { facebook: fb, instagram: ig } = person.links.social;
    console.log(fb, ig);
}