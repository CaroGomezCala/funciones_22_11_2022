addEventListener("DOMContentLoaded", (e) =>{

    //Funciones como objetos
    //Las funciones es pueden declarar como si fuesen objetos, aunque no es utilizado normalmente de esta forma
    //Para esto se guarda en una variable declarada, utilizamos la palabra reservada new seguida de Function
    const saludar = new Function("return'Hola!! Soy una funcion como objeto';");
    console.log(saludar());
})