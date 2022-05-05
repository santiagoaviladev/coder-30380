 
  //Entidad sin objetos
  let id = 0;
  let nombre = "Franco";
  let apellido = "Pipieri"
  let rol = "cliente"
  let colorFavorito = "rojo";

  let id2 = 1;
  let nombre2 = "Ulises";
  let apellido2 = "Catarinolo"
  let rol2 = "cliente"
  let colorFavorito2 = "azul";

  let id3 = 2;
  let nombre3 = "Fernando";
  let apellido3 = "Benitez"
  let rol3 = "cliente"
  let colorFavorito3 = "verde";
  
  
  // Definición literal de objeto
  let usuario1 = {
    id: 0,
    nombre: "Franco",
    apellido: "Pipieri",
    rol: "cliente",
    colorFavorito: "rojo",
  }

  let usuario2 = {
    id: 1,
    nombre: "Ulises",
    apellido: "Catarinolo",
    rol: "cliente",
    colorFavorito: "azul",
  }

  console.log(usuario1);


  // Acceso a los valores del objeto (.)
 
  console.log(usuario1.colorFavorito);

  console.log(usuario1.salario); // undefined

  // Acceso a los valores del objeto []
  console.log(usuario1["rol"]);


  // Asignación a las propiedades (.)
  usuario1.colorFavorito = "morado";
  console.log(usuario1);

  let usuario4 = usuario1; // NO SE HACE!!!!!!!! 
  /*
    El valor se pasa por referencia.
    En este sentido, usuario4 y usuario1 
    son el mismo objeto
  */


  // Asignación a las propiedades []
  usuario1["colorFavorito"] = "verde";
  console.log(usuario1);
  console.log(usuario4);