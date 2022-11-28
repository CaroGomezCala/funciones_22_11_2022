addEventListener("DOMContentLoaded", (e) =>{

    //Funciones Callback
    //Consiste en crear una funcion B que sera llamada, tomandose como parametro para una funcion A
    //Debemos definir la funcion B fB
    const fB = function () {
        console.log("Función B ejecutada.");
    };

    //Aqui definimos la funcion A, dentro de los parentesis debe ir la palabra callback
    //En la estructura interna de la funcion A utilizando el callback se llamara la funcion parametro
    //De manera que es ahi donde se realiza el llamado a ejecucion de la funcion B.
    const fA = function (callback) {
        callback();
    };
  
    fA(fB);
})