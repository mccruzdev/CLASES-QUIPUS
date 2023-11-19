
function saludar(nombre)
{
    console.log("Hola, "+nombre);
}

function suma(valor1, valor2){
    let suma = valor1 + valor2;
    //return valor1+valor2;
    return suma;
}

function esMayor(num1, num2)
{
    return num1 > num2;
}

function dividir(num1, num2)
{
    let resultado = 0;
    if(num2!=0)
        return  num1/num2;
    else{
        console.log("no se puede realizar la division")
        return NaN;
    }
}

saludar("Alexander");
var resultado = suma(10, 45);
console.log(suma(-5, 4.9));
console.log(resultado);
console.log(esMayor(5,6));
console.log(esMayor(10,6));
console.log(dividir(10,0));