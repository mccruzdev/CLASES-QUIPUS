function saludar(){
    console.log("hola");
    return "mundo";
}

var saludar = function(){
    console.log("otro saludo");
};



console.log(saludar());

function func2(arg, fn){
    fn(arg);
}

function saludar2(nom)
{
    console.log("Hola "+nom)
}
(function(){
    console.log("estyoy dentro de una funcion")
})();

//Inmediately invoked Function Expression - IIFE
