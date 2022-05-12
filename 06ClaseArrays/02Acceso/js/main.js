
const misNumeros = [10,9,8,7,6,6,100,200,300];
 //Posición o índice 0,1,2,3,4,5,  6,  7

 console.log(misNumeros[0]); //10
 console.log(misNumeros[2]); //8
 console.log(misNumeros[10]); //undefined

 console.log("RECORRIDO DEL ARRAY");
 for(let i=0;i<=5;i++)
 {
    console.log(misNumeros[i]);
 }

 console.log("ASIGNACIÓN AL ARRAY");
 //Asignar valores a las posiciones del array
 misNumeros[3] = 22; 
 console.log(misNumeros[3]); //22

 misNumeros = [2,3,4]; // error