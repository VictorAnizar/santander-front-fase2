//importamos la biblioteca de express para poder generar la API
const { response } = require('express');
const express = require('express');
//esta var es la que va a abstraer el comportamiento COMPLETO de nuestra API
const app = express();
//importamos la biblioteca para parsear los bodys de los json que se mandan 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//se parsean los bodys a json
app.use(bodyParser.json());

//decimos cómo/dónde se va a ejecutar la app
//definimos el puerto 
const PORT = 4001;
//activa la aplicacion y decimos qué debe de hacer
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

// const gods = [{ name: 'Zeus' }, { name: 'Hades' }, { name: 'Hermes' }];
/* 
const constelaciones =
{

    Andromeda: {
        nombre:"Andromeda",
        abreviatura: 'And',
        superficie: 722.3,
        num_estrellas: 152,
        estr_mas_brillante: 'Alpheratz'
    },
    CanisMajor: {
        nombre:"CanisMajor",
        abreviatura: 'CanMaj',
        superficie: 380.1,
        num_estrellas: 147,
        estr_mas_brillante: 'Sirio'
    }

};



app.get('/constelaciones', (request, response) => {
    response.send(constelaciones);
});

let variable = "variable";


// app.get('/constelaciones/:name', (req, res)=>{
//     if(constelaciones[req.params.name]){
//         res.send(constelaciones[req.params.name]);
//     }else{
//         res.status(404).send("No encontrado");
//     }
// })



//Dependiendo de la abreviacion que llegue, se va a hacer una busqueda 
app.get(`/constelaciones/:propiedad=:valor`, (req, res) => {
    //se guardan en variables los valores mandados por url
    let valor = req.params.valor;
    let propiedad = req.params.propiedad;
    for (const key of Object.entries(constelaciones)) {
        //si por lo menos sabemos que el valor mandado para la propiedad existe
        if (key[1][propiedad] ) {
            if (key[1][propiedad] == valor) {
            //se hace un filtro y se devuelve el json de la constelacion el cual contenga como propiedad
            //el valor mandado
            res.send(...key.filter(e => e[propiedad] == valor));
            }
        }
        else{
            res.status(404).send("Propiedad no definida");
        }
    }
    res.status(404).send(" Constelacion no encontrada. Introduce un valor existente para la propiedad "+propiedad);
    

    //se va a decidir qué propiedad se eligio
    // switch (propiedad) {
    //     case "abreviatura":
    //         //se recorre todo el arreglo
    //         for (const key of Object.entries(constelaciones)) {
    //             //si por lo menos sabemos que el valor mandado para la abreviatura existe
    //             if (key[1].abreviatura == valor) {
    //                 //se hace un filtro y se devuelve el json de la constelacion el cual contenga como abreviacion
    //                 //el valor mandado
    //                 res.send(key.filter(e => e.abreviatura == valor));
    //             }
    //         }
    //         res.status(404).send("Constelacion no encontrada por abreviatura");
    //         break;
    //     case "estr_mas_brillante":
    //         //se recorre todo el arreglo
    //         for (const key of Object.entries(constelaciones)) {
    //             //si por lo menos sabemos que el valor mandado para la abreviatura existe
    //             if (key[1].estr_mas_brillante == valor) {
    //                 //se hace un filtro y se devuelve el json de la constelacion el cual contenga como abreviacion
    //                 //el valor mandado
    //                 res.send(key.filter(e => e.estr_mas_brillante == valor));
    //             }
    //         }
    //         res.status(404).send("Constelacion no encontrada por estrella mas brillante");
    //         break;
    //     case "superficie":
    //         //se recorre todo el arreglo
    //         for (const key of Object.entries(constelaciones)) {
    //             //si por lo menos sabemos que el valor mandado para la abreviatura existe
    //             if (key[1].superficie ==parseFloat(valor)) {
    //                 //se hace un filtro y se devuelve el json de la constelacion el cual contenga como abreviacion
    //                 //el valor mandado
    //                 res.send(key.filter(e => e.superficie == valor));
    //             }
    //         }
    //         res.status(404).send("Constelacion no encontrada por estrella mas brillante");
    //         break;
    //     case "num_estrellas":
    //         //se recorre todo el arreglo
    //         for (const key of Object.entries(constelaciones)) {
    //             //si por lo menos sabemos que el valor mandado para la abreviatura existe
    //             if (key[1].num_estrellas == parseInt(valor)) {
    //                 //se hace un filtro y se devuelve el json de la constelacion el cual contenga como abreviacion
    //                 //el valor mandado
    //                 res.send(key.filter(e => e.num_estrellas == valor));
    //             }
    //         }
    //         res.status(404).send("Constelacion no encontrada por estrella mas brillante");
    //         break;
    //     default:
    //         res.status(404).send("Constelacion no encontrado");
    // }



});


const gods = {
    Zeus: { live: 'Olympus', symbol: 'Thunderbolt' },
    Hades: { live: 'Underworld', symbol: 'Cornucopia' }
};



//que mi app este atenta a una peticion GET
//lo que se hace cuando llega una peticion GET a la ruta "/gods"
//Param1:subdireccion de la app
//Param2:request y response son los elementos principales en una peticion (peticion y respuesta)
//estructura basica de un servicio
app.get('/gods', (request, response) => {
    response.send(gods);
});


//nueva forma de trabajar con una peticion GET cuando se le pasan más "subrutas" 
app.get('/gods/:name', (req, res) => {
    let god = gods[req.params.name];
    //si existe el dios
    if (god) {
        //se manda
        res.send(god);
    }
    //si no existe
    else {
        //se cambia el estatus del codigo y se manda un mensaje
        res.status(404).send("Dios no encontrado")
    }
});



//metodo para hacer la edicion
app.put('/gods/:name', (req, res) => {
    let god = req.params.name;
    gods[god] = req.body;
    res.send(gods);
});

app.post('/gods', (req, res) => {
    let name = req.query.name;
    let info = req.body;
    gods[name] = info;
    req.status(200).send(gods);
});


app.delete('/gods/:name', (req, res) => {
    let name = req.params.name;
    delete gods[name];
    res.send(gods);
}); */