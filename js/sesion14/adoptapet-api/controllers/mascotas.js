/*  Archivo controllers/Mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de Mascotas
const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo Mascota utilizando la clase Mascota
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Rocky', 'Perro', 'foto.png', 'Pitbul color miel', 'anunciante1', 'CDMX')
  var mascota2 = new Mascota(2, 'Mamba', 'Perro', 'foto.png', 'Pitbul color gris', 'anunciante1', 'CDMX')
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  // simulando un Mascota previamente existente que el cliente modifica
  var mascota1 = new Mascota(req.params.id, 'Rocky', 'Perro', 'foto.png', 'Pitbul color miel', 'anunciante1', 'CDMX')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  // se simula una eliminación de Mascota, regresando un 200
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}
