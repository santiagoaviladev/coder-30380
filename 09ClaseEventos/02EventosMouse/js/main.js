 
  const boton1 = document.getElementById("miBoton1");

  boton1.addEventListener("mouseover", ()=>{
      boton1.innerHTML="HOLIS";
  });

  boton1.addEventListener("mouseout", ()=>{
    document.body.setAttribute("style", "background-color:red");
    boton1.innerHTML="TRY ME";
});
