
  const mascotas = ["perico", "morgan", "jose", "sarna", "vito", "roma"];

  const nodoUL = document.createElement("ul");
  for(let i=0;i<mascotas.length;i++)
  {
    const nodoLI = document.createElement("li");
    nodoLI.innerText=mascotas[i];
    nodoUL.appendChild(nodoLI);
     
  }

  
  
  
  document.body.appendChild(nodoUL);

  console.log(document);