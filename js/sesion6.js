'use strict'


//reto 1
//Crear un constructor, agregar métodos al prototype e instanciar múltiples objetos a partir de dicho constructor. 

/*
Crear un function constructor Vec el cual representa un vector en dos dimensiones. Recibe dos parámetros x y y,
ambos valores numéricos que deben ser las propiedades del objeto.

Agregar los siguientes métodos al prototype de Vec:

plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).
*/
/*
const Vec = function (x, y) {
    this.x=x;
    this.y=y;
    this.plus=function(otro_vector){
        return new Vec(
            x=this.x+otro_vector.x,
            y=this.y+otro_vector.y 
        );
    };
    this.minus=function(otro_vector){
        return new Vec(
            x=this.x-otro_vector.x,
            y=this.y-otro_vector.y 
        );
    };
    this.length=function(){
        return Math.sqrt(this.x**2 + this.y**2);
    };
}

/* reto 1

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
 console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
 console.log(vec1.length()); // 2.23606797749979


*/
//reto 2

/* Crear un function constructor Group el cual crea una lista (arreglo) vacía.

Agregar los siguientes métodos a Group:

add: Agrega un nuevo valor al grupo solo si no existe.

has: Retorna un booleano indicando si el valor es un miembro del grupo.

from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.
*/
/*
const Group = function(arr) {
    // Code goes here...
    this.arr=arr;
    this.has=function(num){
        for (let index = 0; index < this.arr.length; index++) {
           if(this.arr[index]==num){
               return true;
           }
        }
        return false;
    };
    this.add=function(num){
        this.arr.push(num);
    }
}
Group.from=function(arr){
    return new Group(arr);
}
  
const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
  
group.add(10);
console.log(group.has(10)); // true
*/

//reto 3
//Crear un constructor, agregar métodos al prototype e instanciar múltiples objetos a partir de dicho constructor.

//Crear un function constructor Triangle con tres parámetros a, b y c. Cada uno representa un lado del triángulo.
//Agregar el método getPerimeter al prototype de Triangle, el cual retorna el perímetro del triángulo.

const Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.getPerimeter=function(){
    return (this.a+this.b+this.c);
}


const triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6