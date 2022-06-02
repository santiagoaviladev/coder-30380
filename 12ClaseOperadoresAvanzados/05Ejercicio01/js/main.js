/*
    

*/

 let numeros = [0,1,2,3,4,5,6,7,8,9];
 let operaciones = ['+','-','*','/','='];
 let operando1 = 0;
 let operando2 = 0;
 let operacionActual='';

 inicializarCalculadora();
 mostrarResultado();

 function inicializarCalculadora()
 {
     numeros.forEach((num)=>{
         const btn = document.createElement("button");
         btn.innerText=num;
         document.body.appendChild(btn);
     })
     operaciones.forEach((op)=>{
        const btn = document.createElement("button");
        btn.innerText=op;
        document.body.appendChild(btn);
    })
 }

 function mostrarResultado()
 {
    if(operacionActual==='')
    {
        const div = document.createElement("div");
        div.innerText="REALIZE UNA OPERACIÓN PARA MOSTRAR UN RESULTADO";
        document.body.appendChild(div);
    }
    else{
        const div = document.createElement("div");
        div.innerText=calcularOperacion(operando1,operando2, operacionActual);
        document.body.appendChild(div);
    }

 }

 function calcularOperacion(op1,op2,operacion)
 {
   
 }
