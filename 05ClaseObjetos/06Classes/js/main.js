
 
 //creación de class
 class Usuario{

    constructor(nombre, apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }

    nombreCompleto()
    {
        return this.nombre+" "+this.apellido;
    }

 }
 
  const usuario = new Usuario("Bruno", "Coco");
  console.log(usuario.nombreCompleto());
  


