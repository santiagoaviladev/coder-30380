class Carrito{

    constructor(productos)
    {
        this.productos= productos
    } 

    agregarProducto(producto)
    {
        const esta = this.productos.find(element=>producto.id===element.id);

        if(esta)
        {
            esta.cantidad = producto.cantidad+esta.cantidad
        }
        else 
        {
            this.productos.push(producto);
        }
        
    }

    calcularTotal()
    {
        let total = 0;
        for(let i=0;i<this.productos.length;i++)
        {
            total+=this.productos[i].price*this.productos[i].cantidad;
        }
        return total;
    }

    vaciarCarrito()
    {
        this.productos=[];
    }

    borrarProducto(producto)
    {
        const pABorrar = this.productos.find(element=>producto.id===element.id);
        console.log("PRODCTO A BORRAR");
        console.log(pABorrar);

        const index = this.productos.indexOf(pABorrar);

        this.productos.splice(index,1);
    }
}