 
  // function 
  function Usuario(id, nombre, apellido)
  {
      this.id=id;
      this.nombre=nombre;
      this.apellido=apellido;
  }

  const usuario1 = new Usuario(1, "Patricio", "Joandet");
  console.log(usuario1);

  const usuario2 = new Usuario(2, "Mauro", "Lizarraga");
  console.log(usuario2);

  // uso del constructor con oobjeto literal

  function UsuarioLiteral(literal)
  {
      this.id=literal.id;
      this.nombre=literal.nombre;
      this.apellido=literal.apellido;
  }

  const usuario4 = new UsuarioLiteral({id:3, nombre:"Martin", apellido:"Quevedo"});

  console.log(usuario4);


  


