   /*EJEMPLO 1 */
  let nombreUsuario = localStorage.getItem("nombreUsuario") || "Usuario sin nombre"; 

   console.log(nombreUsuario);


   /*EJEMPLO 2 */

   const producto = {id:1,
                     nombre:"Leche", 
                    precio: "1000"};

    const producto2 = {id:2,
                        nombre:"Cerveza", 
                       precio: "1000", 
                       promocion:"20%"};

   const productos = [producto, producto2];

  productos.forEach(producto => {
      const div = document.createElement("div");
      div.innerHTML= `<b>${producto.nombre}</b><br/>
                        ${producto.precio}<br/>
                        ${producto.promocion || ''}
                        <br/>
                        `
    document.body.appendChild(div);
  });