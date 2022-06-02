
 let edad = Number(prompt("Ingrese se edad"));
 let mensaje=""
 if(edad>18)
 {
    mensaje = "Puede comprar cerveza";
 }
 else
 {
    mensaje = "No puede comprar cerveza";
 }
 alert(mensaje);



 let mensaje2 = edad>18 ? 
               "Puede comprar cerveza" : 
               "No puede comprar cerveza";

 alert(mensaje2)


 const usuarios = ["usuario1", "usuario2"];

 const mostrar = usuarios.length>0 ? mostrarListadoUsuarios() : mostrarNoHayUsuarios();

 mostrar();