/*
    Inicializa la aplicación
    Agrega H1 
    Agrega Subtítulo
*/
function inicializarAplicacion()
{
    crearTitulo(); 
    crearMenu();
    

}

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="SISTEMA DE USUARIOS";
    document.body.appendChild(tituloH1);
}
function crearMenu()
{
         
     

}
/*
    Muestra el listado de usuarios del sistema
*/
function listarUsuarios()
{
   let miLista = document.querySelector("#listaUsuarios");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaUsuarios");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdApellido = document.createElement("th");
   tdApellido.innerHTML="Apellido";
   encabezado.appendChild(tdApellido);

   const tdCumpleanos = document.createElement("th");
   tdCumpleanos.innerHTML="Cumpleaños:";
   encabezado.appendChild(tdCumpleanos);

   const tdAcciones = document.createElement("th");
   tdAcciones.innerHTML="Acciones";
   encabezado.appendChild(tdAcciones);

   miLista.appendChild(encabezado)
   
   usuarios.forEach((usuario)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.nombre}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${usuario.apellido}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`No reporta`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`Borrar | Editar`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}