
 //Función que retorna función

  function mayorQue(n)
  {
      return (m) =>  m>n;
  }

  let mayorQueDiez = mayorQue(10); // return (m)=>m>10;

  console.log(mayorQueDiez(5));


 //Función que recibe función por parámetro
  
    function  porCadaUno(arr, fun)
    {
        //for(let i=0;i<arr.length;i++) {fun(arr[i])}
        for(const elemento of arr)
        {
            fun(elemento);
        }
    }

   let total =0;
   function acumular(num)
   {
        total += num;
   }

   const numeros =[1,2,3,4,5,6];
   porCadaUno(numeros, acumular);
