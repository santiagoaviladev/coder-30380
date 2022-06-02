
  class Operandos {
      constructor(operando1,operando2)
      {
          this.operando1=operando1;
          this.operando2=operando2;
      }
  }

  const numeros = new Operandos(2,3);

  sumar(numeros);
/*
  function sumar(numeros)
  {
      alert(numeros.operando1+numeros.operando2);
  }*/

  function sumar({operando1,operando2})
  {
      alert(operando1+operando2);
  }