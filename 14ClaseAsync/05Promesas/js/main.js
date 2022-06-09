


  const miPromesa = (res) => new Promise((resolve, reject)=>{

    if(res===true)
    {
        resolve("200")
    }
    else
    {
        reject("ERROR INDUCIDO POR MI: FALLÓ")
    }

})

 

  let resultado = prompt("Indique qué quiere que pase")
  let myRes = resultado === "1" ? true : false;

  miPromesa(myRes)
  .then((response)=>console.log(response))
  .catch((error)=>console.log(error))
  .finally(()=>console.log("FINALIZAMOS"));