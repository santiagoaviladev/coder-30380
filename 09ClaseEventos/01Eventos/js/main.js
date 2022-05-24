// addEventListener

  const boton1 = document.getElementById("miBoton1");
  boton1.addEventListener("click", ()=>{
      alert("ESTE ES EL CLICK DEL PRIMER BOTÓN");
  });

  const boton2 = document.getElementById("miBoton2");
  boton2.onclick = ()=>{
      let nombre = prompt("Ingrese su nombre");
      alert(`Hola, ${nombre}`);
  }