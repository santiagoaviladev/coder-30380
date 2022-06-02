
 
  const usuarios = [
      {id:1,nombre:"Santi", apellido:"Avila"},
      {id:2,nombre:"Franco", apellido:"Pipieri"},
      {id:3,nombre:"Gonzalo", apellido:"Ulloa"},
      {id:4,nombre:"Bruno", apellido:"Cocco"},
      {id:5,nombre:"Agustín", apellido:"Sánchez", rol:{id:1,label:"estudiante"}},
  ];

  let idIngresado = Number(prompt("Ingrese el id que quiere buscar"));

  let encontrados = usuarios.filter(element=>element.id===idIngresado);

  console.log(encontrados[0]?.nombre+" "+encontrados[0]?.apellido);

  /*Ejemplo 2*/ 
  usuarios.forEach(usuario=>{
      console.log(usuario.rol?.label);
  })
 