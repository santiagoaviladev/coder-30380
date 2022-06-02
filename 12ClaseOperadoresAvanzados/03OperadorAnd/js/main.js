 
 const usuarios = ["usuario1", "usuario2"];

 /*
 if(usuarios.length===0)
 {
     console.log("No hay usuarios")
 }*/

 usuarios.length === 0 && mostrarNoHayUsuarios();

 usuarios.length > 0 &&  mostrarListadoUsuarios();


 function mostrarNoHayUsuarios()
 {
     alert("No hay usuarios");
 }

 function mostrarListadoUsuarios()
 {
     const ul = document.createElement("ul");
     usuarios.forEach((usuario)=>{
         const li = document.createElement("li");
         li.innerText=usuario;
         ul.appendChild(li);
     })
     document.body.appendChild(ul);
 }