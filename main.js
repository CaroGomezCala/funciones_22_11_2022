addEventListener("DOMContentLoaded", (e) =>{

    //Continuamos con el ejemplo suma con funcion anonima
    //Al omitir el nombre de la funcion, esta toma el nombre de la variable
    //A esto se le llama funcion Anonima
    const suma = function(num1,num2){
        console.log(`La suma de los numeros es: ${num1+num2}`);
    } 
    suma(7,35);
})