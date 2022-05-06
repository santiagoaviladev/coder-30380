 
  /*
    Cree el modelo para un carrito de compras, 
    que contenga los siguientes elementos: 
    1. Producto (id, nombre, precio y una función que calcule el iva)
    2. Persona (id, rol [Debe ser de tipo Rol], nombre, apellido y 
      una función que retorne el nombre y el apellido en una sola cadena)
    3. Rol (id, nombre)
    4. Compra (producto[Debe ser de tipo Producto], 
      persona[Debe ser de tipo Persona])

    simule una compra usando los constructores e imprimala en consola
  
  */
  class Compra {
      constructor(producto, persona) {
          this.producto = producto;
          this.persona = persona;
      }
  }

    class Rol {
      constructor(id, nombre) {
          this.id = id;
          this.nombre = nombre;
      }
  }
    class Persona {
      constructor(id, rol, nombre, apellido) {
          this.id = id;
          this.rol = rol;
          this.nombre = nombre;
          this.apellido = apellido;
  
      }
  
      nombreCompleto() {
          return this.nombre + ' ' + this.apellido
      }
  }
   class Producto
   {
     constructor(id, nombre, precio)
     {
       this.id=id;
      this.nombre=nombre;
      this.precio = precio;
     }
     calcularIva()
     {
       return this.precio*0.21;
     }
   }

   const producto = new Producto(1, "Arroz", 100);
   const rol = new Rol(1, "cliente");
   const persona = new Persona(1,rol,"Gonzalo", "Ulloa" );

   const compra = new Compra(producto, persona);
   

   console.log(compra);
