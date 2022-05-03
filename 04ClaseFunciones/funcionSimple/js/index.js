
    
  saludar();
  saludarConNombre();

  function saludar()
  {
      //ACA PUEDEN ESCRIBIR BLOQUES DE CÓDIGO
      console.log("HOLA, ESTUDIANTES");
  }

  function saludarConNombre()
  {
    saludarConApellido();
  }
  console.log("ACA VA DESPUÉS DE LA FUNCIÓN")


  function saludarConApellido()
  {
      const nombreCompleto = prompt("Ingresa tu Nombre Completo");
      alert(nombreCompleto);

  }
  

  