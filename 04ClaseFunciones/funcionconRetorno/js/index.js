

 function sumar(sumando1,sumando2)
 {
     return sumando1+sumando2;
 }



 const numero1 = Number(prompt("Ingresa un num"));
 const numero2 = Number(prompt("Ingresa otro numero"));

 const resultado = sumar(numero1, numero2);

 alert(resultado);

 const numero3 = Number(prompt("Ingresa un num adicional"));

 const resultado2 = sumar(resultado, numero3);
 alert(resultado2);