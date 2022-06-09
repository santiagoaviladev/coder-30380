//setTimeout


const msg = document.getElementById("msg");
msg.innerHTML="MENSAJE PARA EL USUARIO";
msg.setAttribute("style", "width:200px;margin-top:10%;margin-left:auto;margin-right:auto;border:1px solid red;border-radius:20px;padding:5%")

let contador = 0;
setInterval(()=>{

    contador++;
    msg.innerHTML=msg.innerHTML+" "+contador;
    

}, 1000)