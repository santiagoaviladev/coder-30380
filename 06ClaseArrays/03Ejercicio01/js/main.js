
  // Pedir al usuario que ingrese 5 números al azar
  // guardarlos en un array 
  // imprimir la suma de los elementos del array
  // imprimir la multipliación de los elementos del array

  let contador=0;
  let miArray = [];
  while(contador<5)
  {
      let numero = Number(prompt("Ingrese un numero"));
      miArray.push(numero);
      contador++;
  }
  console.log("IMPRIMIR ARRAY");
  console.log(miArray);

  let suma = 0;
  for(let i=0;i<miArray.length;i++)
  {
    suma += miArray[i];
  }
  console.log("SUMA", suma);

  let multiplicacion = 1;
  for(let i=0;i<miArray.length;i++)
  {
    //multiplicacion=multiplicacion*miArray[i];
    multiplicacion*=miArray[i];
  }
  console.log("MUL", multiplicacion);