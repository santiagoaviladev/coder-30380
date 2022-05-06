 
  /* cree una función que le permita construir un objeto
    para modelar un empleado con: 
      Nombre
      Apellido
      
      
      Pida al usuario del sistema que ingrese los datos 
      para un empleado e imprima la información ingresada en consola, 
      usando el objeto creado.
  */
 
    // Constructor con parámetros
    function Usuario(nombre, apellido)
    {
      this.nombre=nombre;
      this.apellido=apellido;
    }


    // Constructor literal
    function UsuarioLiteral(usuario)
    {
      this.nombre=usuario.nombre;
      this.apellido=usuario.apellido;
    }


    const nombre = prompt("Su nombre:");
    const apellido = prompt("Su Apellido:");

    const usuario1 = new Usuario(nombre,apellido);
    console.log(usuario1);

    const usuario2 = new UsuarioLiteral({nombre:nombre,apellido:apellido});
    console.log(usuario2);
    