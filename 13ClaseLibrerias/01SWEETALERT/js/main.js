init();


function init()
{
    saludarConSweetAlert();
    
    alertSinBotonDeConfirmacion();
    alertConImagenes();
    alertConEventos();

}

function saludarConSweetAlert()
{
    const btn = document.getElementById("btnSweet");
    btn.addEventListener("click", ()=>{

        Swal.fire({
            title:'Hola',
            text:'Esto es una prueba',
            icon: 'success',
            confirmButtonText: 'ESTÁ BIEN'
        })
    })

    
}

function alertSinBotonDeConfirmacion()
{
    const btn = document.getElementById("btnSweet2");
    btn.addEventListener("click", ()=>{

        Swal.fire({
            title:'Hola',
            text:'Esto es una prueba',
            icon: 'success',
            showConfirmButton: false,
        })
    })
}

function alertConImagenes()
{
    const btn = document.getElementById("btnSweet3");
    btn.addEventListener("click", ()=>{

        Swal.fire({
            title:'Hola',
            text:'Esto es una prueba',
            icon: 'success',
            showConfirmButton: false,
            imageWidth: "50%",
            imageUrl: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png'
        })
    })
}

function alertConEventos()
{
    const btn = document.getElementById("btnSweet4");
    btn.addEventListener("click", ()=>{

        Swal.fire({
            title:'Hola',
            text:'Esto es una prueba',
            icon: 'success',
            confirmButtonText: 'ESTÁ BIEN',
            cancelButtonText: 'No ESTÁ BIEN',
            showCancelButton: true,
        }).then((result)=>{
            if(result.isConfirmed)
            {
                alert("CONFIRMADO");
            }
            else
            {
                alert("NO CONFIRMADO");
            }
        })
    })
}