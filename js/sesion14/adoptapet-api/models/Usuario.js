// Usuario.js
/** Clase que representa a un usuario de la plataforma*/
class Usuario {
    constructor(id, username, nombre, apellido, email, password, tipo) {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.tipo = tipo; // tipo normal o anunciante
    }
  }
  module.exports = Usuario;
  