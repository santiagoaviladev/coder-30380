
// constructor con funciones

function Usuario(nombre, apellido)
{
  this.nombre=nombre;
  this.apellido=apellido;
  this.nombreCompleto = function (){
      return nombre+" "+apellido;
  }
}

const usuario = new Usuario("Fabian", "Martinez");

let nombreCompleto = usuario.nombreCompleto();
console.log(nombreCompleto);


 

  


