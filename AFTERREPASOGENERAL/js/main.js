const miCarrito = new Carrito([]);

mostrarProductos();
mostrarCarrito();
mostrarTotalCarrito();
programarBotonesCarrito();


function mostrarProductos()
{
    products.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML=`

            <img src='${element.image}' width="100px"/><br/>
            ${element.title}<br/>
            $${element.price}<br/>
        `
        const btn = document.createElement('button')
        btn.innerText="Agregar Al Carrito"
        btn.addEventListener('click', ()=>{
            const productoParaCarrito = {
                ...element, 
                cantidad:1,
            }

            miCarrito.agregarProducto(productoParaCarrito);
            mostrarCarrito();
            console.log("Carrito", miCarrito);
        })

        div.appendChild(btn);
        

        document.body.appendChild(div);
    });


}

function mostrarCarrito()
{
    const divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML="";
    miCarrito.productos.forEach(element=>{
         const div = document.createElement("div");
        div.innerHTML=`

            <img src='${element.image}' width="20px"/><br/>
            ${element.title}<br/>
            $${element.price*element.cantidad}<br/>
            Cantidad: ${element.cantidad}

        `
        

        const btnBorrar = document.createElement('button')
        btnBorrar.innerHTML="borrar producto del carrito"
        btnBorrar.addEventListener('click', 
        ()=>{
            borrarProducto(element);
        })
        div.appendChild(btnBorrar);

        divCarrito.appendChild(div)

    })

    mostrarTotalCarrito();
}

function mostrarTotalCarrito()
{
     const divTotal = document.getElementById("totalCarrito");
     divTotal.innerHTML="";
     total = miCarrito.calcularTotal();
     
    divTotal.innerHTML="TOTAL: $"+total.toFixed(2);

}

function programarBotonesCarrito()
{
    programarVaciarCarrito();
}

function programarVaciarCarrito()
{
     const btn = document.getElementById('vaciarCarrito')
     btn.addEventListener('click', ()=>{
         miCarrito.vaciarCarrito();
         mostrarCarrito();
     })
}

function borrarProducto(producto)
{
    miCarrito.borrarProducto(producto);
    mostrarCarrito();
}