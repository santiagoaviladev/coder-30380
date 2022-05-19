
 const nodo = document.getElementById("miContenido");
 const nombre = prompt("Ingrese su nombre");
  
 nodo.innerHTML = `<b>¡BIENVENIDO, ${nombre}!</b>`;

 const mascotas = ["perico", "morgan", "jose", "sarna", "vito", "roma"];

 const spans = document.getElementsByClassName("mySpan");

 let index=0;
 for(let span of spans)
 {
     span.innerText= mascotas[index];
     index++;
 }
