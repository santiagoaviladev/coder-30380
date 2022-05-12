
//length
const misNumeros = [10,9,8,7,6,6,100,200,300,2000,-100,1.8,456];
                   //0,1,2,3,4,5,6,  7,  8,  9,   10,  11, 12
console.log(misNumeros.length);
 
 for(let i=0;i<misNumeros.length;i++)
 {
     console.log(misNumeros[i]);
 }

//push
misNumeros.push(21);
console.log(misNumeros);

//unshift
misNumeros.unshift("Al principio");
console.log(misNumeros);

//pop
misNumeros.pop();
console.log(misNumeros);

//shift
misNumeros.shift();
console.log(misNumeros);

//splice
misNumeros.splice(2,3);
console.log(misNumeros);

//join
const perros = ["tito", "machita", "morgan", "tuca"]
let cadenaPerros = perros.join(",");
console.log(cadenaPerros);

//concat
const gatos = ["michi", "gatito", "porro"];
const mascotas = gatos.concat(perros);
console.log(mascotas);

//slice
const copia = mascotas.slice(2,6);
console.log(copia);

//indexOf
const index = mascotas.indexOf("machita");
console.log(index);

//includes
const esta = mascotas.includes("pepito");
console.log(esta);

//reverse
mascotas.reverse();
console.log(mascotas);