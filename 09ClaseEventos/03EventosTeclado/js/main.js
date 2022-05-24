

 const input2 = document.getElementById("input2");
 const btn = document.getElementById("miBoton1");
 input2.onchange= ()=> btn.disabled=false;
 
 btn.addEventListener("click", ()=>{
     validarFormulario();
 });

 function validarFormulario()
 {
     const nombre = document.getElementById("input1");
     const apellido = document.getElementById("input2");

     if(nombre.value.trim()!=="" && apellido.value.trim()!=="")
     {
         alert("Datos Correctos")
     }
     else
     {
         alert("DATOS INVÁLIDOS")
     }
 }