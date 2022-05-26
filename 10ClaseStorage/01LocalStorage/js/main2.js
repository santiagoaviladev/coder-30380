
 
  let nombre = localStorage.getItem("NOMBREUSUARIO");


  const h2 = document.createElement("h2");
  h2.innerHTML=`Hola de nuevo, ${nombre}`;
  document.body.appendChild(h2);