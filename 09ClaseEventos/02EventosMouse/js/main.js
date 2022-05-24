
    class Usuario{
        constructor(nombre, apellido, rol)
        {
            this.nombre=nombre;
            this.apellido=apellido;
            this.rol=rol;
        }
    }

   

   function crearUsuario()
   {
       let nombre = prompt("Ingrese nombre");
       let apellido = prompt("Ingrese apellido");
       let rol = prompt("Ingrese rol");
       const usuario = new Usuario(nombre, apellido, rol);
       return usuario;
   }

   function mostrarUsuario(usuario)
   {
        const nodo = document.querySelector("#miContenido");
        nodo.innerHTML=`<b>Nombre:</b> ${usuario.nombre}<br/>
                        <b>Apellido:</b> ${usuario.apellido}<br/>
                        <span>Rol:</span> ${usuario.rol}<br/>`;
   }

   const usuario = crearUsuario();
   mostrarUsuario(usuario);