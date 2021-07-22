'use strict'
window.addEventListener('load', function () {
    /* Ejemplo 1 */
    // const time = 20;
    // let greeting;

    // if(time < 0 || time >= 24){
    //     alert("Hora invalida");
    // }else{
    //     if (time < 12) {
    //         greeting = "Good morning";
    //     }

    //     else if (time < 20) {
    //         greeting = "Good afternoon";
    //     }

    //     else if (time >= 20) {
    //         greeting = "Good evening";
    //     }

    //     console.log(greeting) // Good afternoon
    // }

    /*Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
    a través de condicionales if realice las siguientes operaciones:
    - ______Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
    - ______Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
    - ______Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
    - ______Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4
    pero mayor que 0.8,
    con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
     */
    // console.log("cargado");
    // function diametro_rueda(diametro, grosor) {
    //     if (diametro > 1.4) {
    //         console.log("La rueda es para un vehículo grande");
    //     } else if (diametro <= 1.4 && diametro > 0.8) {
    //         console.log("La rueda es para un vehículo mediano");
    //     } else {
    //         console.log("La rueda es para un vehículo pequeño");
    //     }
    //     if ((diametro > 1.4 && grosor < 0.4) || ((diametro <= 1.4 && diametro > 0.8) && grosor < 0.25)) {
    //         console.log("El grosor para esta rueda es inferior al recomendado");
    //     }
    // }
    // diametro_rueda(1.2,2);

    /*Ejemplo 2*/
    // const day = 2;
    // let text;

    // switch (day) {
    //     case 0:
    //         text = "Sunday";
    //         break;
    //     case 1:
    //         text = "Monday";
    //         break;
    //     case 2:
    //         text = "Tuesday";
    //         break;
    //     case 3:
    //         text = "Wednesday";
    //         break;
    //     case 4:
    //         text = "Thursday";
    //         break;
    //     case 5:
    //         text = "Friday";
    //         break;
    //     case 6:
    //         text = "Saturday";
    //         break;
    //     default:
    //         text = "Error";

    // }

    // console.log(text); // Tuesday

    const speed = 120

const message = speed > 100 ? "You're going too fast!" : "Under the limit"

console.log(message)	// You're going too fast!

/*Reto 2 
Crear un ciclo desde 0 hasta 100.
Mostrar todos los números pares en este ciclo con console.log()*/
    
    for (let index = 0; index <= 100; index++) {
        if(index%2==0){
            console.log("Numero par: " + index);
        }else{
            console.log("Numero impar: " + index);
        }
    }


});