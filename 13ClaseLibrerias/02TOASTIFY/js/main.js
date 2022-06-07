

init();

function init()
{
   agregarAccionConToastify();
   agregarAccionConToastifyStyled();
   agregarAccionConToastifyDestiny();

}

function agregarAccionConToastify()
{
   const btn = document.getElementById("btnTOAST");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: "Esto es una prueba", 
         duration: 3000,
      }).showToast();
   })
}

function agregarAccionConToastifyStyled()
{
   const btn = document.getElementById("btnTOAST2");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: "Esto es una prueba", 
         duration: 3000,
         gravity: 'bottom',
         position: 'left',
         style: {
            background: 'red'
         },
         onClick: ()=>{
            Toastify({
               text: "Esto es una prueba",
         }).showToast()},
      }).showToast();
   })
}

function agregarAccionConToastifyDestiny()
{
   const btn = document.getElementById("btnTOAST4");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: "Esto es una prueba", 
         duration: 3000,
         destination: 'https://www.google.com',
      }).showToast();
   })
}
