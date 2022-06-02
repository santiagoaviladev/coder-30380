
  const producto1 = {id:1, nombre:"leche", precio:1000, promocion:"20%"}; 
  const producto2 = {id:2, nombre:"pan", precio:200}; 


  const {nombre: nombreP1, precio: precioP1} = producto1;
  const {nombre: nombreP2, precio: precioP2} = producto2;

  console.log(nombreP1); //producto1.nombre
  console.log(nombreP2); //producto2.nombre;

 const {id:idProducto, nombre:nombreProducto, precio} = buscarProducto();
 const {id:idUsuario, nombre:nombreUsuario, apellido} = buscarUsuario();

 function buscarProducto()
 {
     return {
         id:1,
         nombre:"leche", 
         precio:"200"
     }
 }
 function buscarUsuario()
 {
     return {
         id:1,
         nombre:"Juan", 
         apellido:"Perez"
     }
 }