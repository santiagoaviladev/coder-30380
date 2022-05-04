

 /* 
 
    Escriba un programa que le pida al usuario su nombre y  
    muestre un menú de opciones:

    1. PEDIR CAFÉ  
    2. PEDIR MATE 
    3. FIN


    1. Si el usuario pide café o mate, debe mostrar un mensaje para 
    que el usuario ingrese un monto de dinero, 
    mostrando el precio del producto elegido
    La máquina solo recibe billetes de 1, 5 y 10 usd
    El precio del café es de 2 usd. 
    El precio del mate es de 3 usd. 

    2. Si el monto ingresado es inferior al costo del producto,
    se debe mostrar un mensaje solicitando más dinero. 

    3. Si el monto ingresado es superior al costo del producto, 
    debe imprimir las vueltas y dar las gracias

    4. Si el usuario no ingresa un monto aceptado, 
    debe mostrar un mensaje diciendo que devuelve el dinero. 

    *** DEBE USAR FUNCIONES PARA REALIZAR EL EJERCICIO ***

 */

    let opcion = mostrarMenu();
    let dineroIngresado = 0;
    if(opcion!=3)
    {
      venderProducto(opcion);
    }
    else
    {
       alert("GRACIAS");
    }
   

    function mostrarMenu()
    {
       return prompt(`Seleccione una opcion: 
                     1. CAFE (2 usd)
                     2. MATE (3 usd)
                     3. FIN`);
      
    }

    function venderProducto(opcion)
    {
       if(opcion==1)
       {
            pedirDinero(2)
       }
       else if(opcion==2)
       {
            pedirDinero(3)
       }
       else 
       {
          alert("opcion invalida")
       }
    }
       
    function pedirDinero(numMin)
    {
            while(dineroIngresado<numMin)
            {
               let dinero = Number(prompt("Ingrese un monto"));
               
               if(dinero!==1 && dinero!==5 && dinero!==10)
               {
                  alert("monto invalido")
               }
               else{
                  dineroIngresado+=dinero;
               }
            }
            
               let cambio = dineroIngresado-numMin;
               alert("Su cambio es: " + cambio);
               alert("Gracias");
            
         
    }
    
