addEventListener("DOMContentLoaded", (e) =>{
    //funcion por expresion: La funcion se guarda dentro de una variable, se declara con la palabra reservada const
    //Se omite nombrar la funcion ya que seria redundante
    const saludar = function(){
        return "Hola!! Soy una funcion por expresion";
    }
    console.log(saludar());

    //Continuamos con el ejemplo suma con funcion por expresion
    const suma = function(num1,num2){
        console.log(`La suma de los numeros es: ${num1+num2}`);
    }
    suma(7,35);
})