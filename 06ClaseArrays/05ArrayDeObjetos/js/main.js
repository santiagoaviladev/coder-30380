 
  const productos = [
    {
        id:1,
        nombre:"leche",
        precio:2000,
    },
    {
        id:2,
        nombre:"cerveza",
        precio:3000,

    },
    {
        id:3,
        nombre:"pan",
        precio:200,

    }

  ]

  console.log(productos);

  for(let i = 0;i<productos.length;i++)
  {
      console.log(productos[i]);
  }

  console.log("Recorrer con OF")
  for(let producto of productos)
  {
      console.log(producto.nombre);
  }