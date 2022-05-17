// Haga un sistema CRUD para administrar usuarios. 
// Un usuario debe tener un id, nombre y apellido. 
// El sistema debe permitir: 
// Agregar un usuario
// Eliminar un usuario dado su id
// Buscar un usuario, dado su nombre 
// Editar el nombre y apellido de un usuario, dado su id

 // Mostar un menu
 // Ingresar Datos 
 // Pedir id del que quiere eliminar
 // Pedir el nombre del que quiere buscar
 // Pedir el ide dl que quiere modificat
 // Crear clase usuario 
 
 class Usuario{
     constructor(id,nombre,apellido)
     {
         this.id=id;
         this.nombre=nombre;
         this.apellido=apellido;
     }
 }

 const usuarios = [];

 mostrarMenu();


 function mostrarMenu()
 {
    let opcion = 0;
    
    while(opcion!==5)
    {
        opcion = Number( prompt(`Seleccione una acción:
                            1. Agregar Usuario
                            2. Eliminar Usuario
                            3. Modificar Usuario
                            4. Listar usuarios
                            5. Salir`));

    switch(opcion)
    {
        case 1:
            {
                agregarUsuario();
                break;
            }
        default:{
            alert("opcion inválida");
        }
       
    }

    }
 }

 function agregarUsuario()
 {      
    let id=1;
     if(usuarios.length>0)
     {
        id=usuarios[usuarios.length-1].id+1;
     }
     
     let nombre=prompt("ingrese un nombre");
     let apellido = prompt("ingrese un apellido");
     let usuario = new Usuario(id, nombre, apellido);

     usuarios.push(usuario);
 }


 console.log(usuarios);

  /*
    usuarios = [];

    usuario = [{id:1,pepito,perez}]
    usuarios.length // 1
    usuarios.length-1 // 0
    usuarios[0] => {id:1,pepito,perez}
    usuarios[0].id // => 1
    usuarios[0].id +1 // 2
    usuario = {id:2,fulano,gomez}
    usuarios = [{id:1,pepito,perez}, {id:2,fulano,gomez},
    , {id:3,fulano,gomez},
, {id:4,fulano,gomez},
, {id:6,fulano,gomez},
, {id:10,fulano,gomez},
, {id:12,fulano,gomez},
, {id:20,fulano,gomez}]

{id:21,fulano,gomez}
  
  
  
  */