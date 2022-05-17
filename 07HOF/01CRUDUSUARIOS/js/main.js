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

 const usuario1 = new Usuario(1, "Ezequiel", "Natale");
 const usuario2 = new Usuario(2, "Roman", "Stoleru");
 const usuario3 = new Usuario(3, "Fernando", "Benitez");

 const usuarios = [usuario1,usuario2,usuario3];
 console.log("INICIAL:", usuarios);

 mostrarMenu();


 function mostrarMenu()
 {
    let opcion = 0;
    
    while(opcion!==10)
    {
        opcion = Number( prompt(`Seleccione una acción:
                            1. Agregar Usuario
                            2. Eliminar Usuario
                            3. Modificar Usuario
                            4. Listar usuarios
                            10. Salir`));

    switch(opcion)
    {
        case 1:
        {
            agregarUsuario();
            break;
        }
        case 4:
        {
            listarUsuarios();
            break;
        }
        default:{
            alert("opcion inválida");
            break;
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


 function listarUsuarios()
 {
    console.log("LISTAR USUARIOS")
    
    usuarios.forEach(
        (usuario)=>{
            
            console.log(usuario.id+" "+usuario.nombre+" "+usuario.apellido);

        }
    );


 }

 