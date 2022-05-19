
//getElementById

const nodo = document.getElementById("miContenido");
console.log(nodo);

const spans = document.getElementsByClassName("mySpan");
console.log("TODOS LOS SPAN");
console.log(spans);
console.log("SOLO EL SEGUNDO");
console.log(spans[1]);

const titulos = document.getElementsByTagName("h1");
console.log("TODOS LOS H1");
console.log(titulos);
console.log("SOLO EL PRIMERO");
console.log(titulos[0]);

 console.log("Todos los span, con un for")
 for(let span of spans)
 {
     console.log(span);
 }