/*
 Escriba un programa que muestre el mensaje: 
 Su pantalla va a explotar en 5 segundos 
 y haga un conteo hacia atrás
 Y tras 5 segundos, ponga el dom, con el fondo en rojo. 
*/

//Contribución de MArtín Mondino
const msg = document.getElementById("msg")


let contador = 5;

msg.innerHTML="SU PANTALLA EXPLOTA EN" + " " + contador + " segundos";


let interval = setInterval(()=>{

    contador--;
    msg.innerHTML="SU PANTALLA EXPLOTA EN" + " " + contador + " segundos";
    
    if(contador===0)
    {
        clearInterval(interval);
        document.body.setAttribute("style", "background-color: red")
    }

}, 1000)