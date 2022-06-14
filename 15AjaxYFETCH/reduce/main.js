
 const numeros = [1,2,3,4,5,6,7,8,9,10];

 let suma=0;
 for(let i=0;i<numeros.length;i++)
 {
    suma+=numeros[i];
 }
 console.log("SUMA TRADICIONAL",suma);

 const sumaReduce = numeros.reduce((acc, element) => acc+element, 0);

 console.log("SUMA REDUCE",sumaReduce);

 const carrito = [
     {id:2, precio:100, cantidad:1},
     {id:3, precio:200, cantidad:2},
     {id:4, precio:300, cantidad:1},
     {id:5, precio:400, cantidad:3},
     {id:6, precio:500, cantidad:1},
 ]

 const totalCarrito = carrito.reduce((total, producto)=>
 {
    const {precio, cantidad} = producto;     
    total+=precio*cantidad;
    return total;

 }, 0)
 alert(totalCarrito);
