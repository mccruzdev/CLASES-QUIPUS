
try{
    var a = 5
    var b = "hola"
    console.log("antes del calculo")
    console.log(a*b);
    console.log("final del programa");
}catch(e){
    console.log("ocurrio un error de calculo");
}
finally{
    console.log("siempre me voy a ejecutar")
}
console.log("fuera del try")
console.log(a+3)