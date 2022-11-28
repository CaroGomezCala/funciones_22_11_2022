addEventListener("DOMContentLoaded", (e) =>{
    //funcion declarada: Esta funcion existira durante todo el codigo, JS procesará, y podremos llamarla en una linea antes de su creacion en el codigo.
    console.log(typeof saludar);

    //se declara la funcion con la palabra reservada function seguida del nombre de la funcion, de la siguiente manera:
    function saludar() {
        return "Hola! Este es un ejemplo de funcion declarada";
    }
    console.log(saludar());

    //Si requerimos ingresar algun parametro, se haran dentro de los parentesis() separados por una coma

    function suma(num1,num2) {
        return `La siguiente es la funcion suma que da por resultado: ${num1 + num2}`;
    }

    //al llamar la funcion se debe digitar dentro de los parentesis los valores de los parametros solicitados
    console.log(suma(5,27));
})