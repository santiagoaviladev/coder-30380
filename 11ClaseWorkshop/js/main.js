
/*
    Parte 1:
    El archivo 'data.js' tiene una copia de la base de datos de Rick & Morty
    1. Cree una clase 'Personaje' 
                        id
                        name
                        image
                        OtherInfo:{
                            gender
                            status
                            location name
                        }
    2. Agregue todos los elementos de data a un array con elementos de tipo Personaje
    3. Cree una funcion que despliegue tarjetas con los personajes de Rick y Morty en la pantalla. 
        La tarjeta debe mostrar la imagen y el nombre del personaje
    4. Cuando se haga click en la tarjeta, se debe mostrar 'el reverso' de la tarjeta con la 
        información contenida en Other Info (Y visceversa)

    Parte 2: 
    5. Agregue una clase, para manejar un carrito de compras de tarjetas de Ricky y Morty 
    6. Modifique el programa, para agregar la acción de compra 
    7. Agregue una función que muestre 'El total comprado' 
*/


 const personajes = [];

  cargarPersonajes();
  crearTarjetas();

  function cargarPersonajes(){

     data.forEach((dato)=>{
         const personaje = new Personaje(
             dato.id,
             dato.name,
             dato.image,
             {
                gender:dato.gender,
                status:dato.status,
                locationName: dato.location.name,
            });
         personajes.push(personaje);
         
     })
     console.log("Log de creación");
     console.table(personajes);

  }

  function crearTarjetas()
  {
    
     const contendor = document.createElement("div");
     contendor.classList.add("mainContainer");

     personajes.forEach((personaje)=>{
         
         const card = document.createElement("div");
         card.classList.add("card");
         mostrarFrente(card, personaje);
         
        contendor.appendChild(card);
     })
     
    
     document.body.appendChild(contendor);


  }

  function mostrarFrente(nodo, personaje)
  {
        nodo.innerHTML=`<div>
           <img src='${personaje.image}' />
            </div>
            <div>
                ${personaje.name}
            </div>
            `;
        nodo.addEventListener("click", ()=>{
                mostrarReverso(nodo, personaje);
            })
  }

  function mostrarReverso(nodo, personaje)
  {
      nodo.innerHTML=`<h2>${personaje.name}</h2>
                      <div>${personaje.otherInfo.gender}</div>
                      <div>${personaje.otherInfo.status}</div>
                      <div>${personaje.otherInfo.locationName}</div>`;
    
       nodo.addEventListener("mouseover", ()=>{
                        mostrarFrente(nodo, personaje);
                    })
    
  }