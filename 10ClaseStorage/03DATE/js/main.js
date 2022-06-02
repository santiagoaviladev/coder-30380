  
  //date 

  const hoy = new Date();

  console.log(hoy);

  console.log("DIA DE LA SEMANA", hoy.getDay());
  console.log("DIA", hoy.getDate());
  console.log("MES", hoy.getMonth());
  console.log("AÑO", hoy.getFullYear());

  // 
  const cumpleRoman = new Date("04/09/1988");

  console.log(cumpleRoman);


  console.log("AÑOS DE ROMAN:");
  console.log((hoy-cumpleRoman)/1000/60/60/24/365);