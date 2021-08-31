class Mascota{
    constructor(id, nombre, categoria, foto, descripcion, anunciante, ubicacion){
        this.id=id;
        this.nombre=nombre;
        this.categoria=categoria;
        this.foto=foto;
        this.descripcion=descripcion;
        this.anunciante=anunciante;
        this.ubicacion=ubicacion;
    }
}
//vamos a exportar la definicion completa de la clase mascota
module.exports=Mascota;