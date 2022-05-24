 
  const boton1 = document.getElementById("miBoton1");

  boton1.addEventListener("mouseover", ()=>{
      boton1.innerHTML="HOLIS";
  });

  boton1.addEventListener("mouseout", ()=>{
    document.body.setAttribute("style", "background-color:gray");
    boton1.innerHTML="TRY ME";
});

const boton2 = document.getElementById("miBoton2");
const boton3 = document.getElementById("miBoton3");
boton2.addEventListener("mousedown", ()=>{
    boton3.setAttribute("style", "display:none");
    boton2.innerHTML="BOTON 2";
});

boton3.addEventListener("mouseup", ()=>{
    boton2.setAttribute("style", "display:none");
    boton3.innerHTML="BOTON 3";
});
