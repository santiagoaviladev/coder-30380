
/*Spread en array*/ 
const mascotas = ["firulais", "coco", "sarna", "vainilla", "garrafa", "cerveza", "comotu"];
console.log(...mascotas);
 console.log("hola", "esto", "es", "una", "cadena");

 const numeros = [1,200,4000,700,800];

 console.log(Math.max(...numeros));

/*Spread en objetos*/
 let usuario = {id:1,nombre:"Juan", apellido:"Ferreto"}
 console.log(usuario);

 let usuario2 = {...usuario};
 usuario2.nombre= "Pepito";
 console.log("USUARIO2", usuario2);
 console.log("USUARIO",usuario);

 let usuario3 = {...usuario, nombre: "JUANITO", rol:"Estudiante"};
 console.log(usuario3);

 