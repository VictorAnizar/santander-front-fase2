'use strict'
window.addEventListener('load', function () {
    /* reto potencia (reto 1) */
    // console.log(power(2,4));
    // console.log(power(10,2));
    // console.log(power(3,3));
    // console.log(power(100,0));
    // console.log(power(3,1));

    //invocar una funcion inmediatamente despues de haberla definido
    (function () {
        const name = "John Doe";
        console.log(name);
    })();

    //numero mayor (reto 2)
    const getLargerIn = (number1, number2) => number1 > number2 ? number1 : number2;
    // console.log(getLargerIn(3, 5));
    // console.log(getLargerIn(10, 5));

    //fibonacci (reto 3)
    fibonacciSequence(5);


});


function power(base, exponent) {

    //usando recursividad
    // if (exponent == 0) {
    //     return 1;
    // } else if (exponent == 1) {
    //     return base;
    // } else {
    //     return base * power(base, exponent - 1);
    // }

    //usando ciclos
    if (exponent == 0) {
        return 1;
    } else if (exponent == 1) {
        return base;
    } else {
        var resultado = base;
        for (let index = 1; index < exponent; index++) {
            resultado *= base;
        }
        return resultado;
    }


}


function fibonacciSequence(limit) {
    var val;
    var pre = 0;
    var pos = 1;
    for (let index = 0; index < limit; index++) {
        val=pre + pos;
        pre=pos ;
        pos=val ;
        console.log(val);
    }
}
