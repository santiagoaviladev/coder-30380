

 
  let items = 10;

  //set item
  localStorage.setItem('MILLAVE', items);
  localStorage.setItem('MILLAVE3', false);

  sessionStorage.setItem('LLAVESESSION', 25678900);


  let nombre=prompt("Ingresa tu nombre");
  localStorage.setItem("NOMBREUSUARIO", nombre);

  const h1  = document.createElement("h1");
  h1.innerHTML=`Bienvenido, ${nombre}`;
  document.body.appendChild(h1);



  // recorrer

  for(let i=0;i<localStorage.length;i++)
  {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log("LLAVE:", key, "VALOR", value);
  }
  
  
  
  // eliminar

  localStorage.removeItem("MILLAVE3");
  //localStorage.clear(); //Borra todo