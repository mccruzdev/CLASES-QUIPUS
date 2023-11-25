const prompt = require("prompt-sync")();

const suma = (num1, num2)=> num1 + num2; //funcion flecha

function restar(num1, num2){
    return num1-num2;
} //funcion normal

const multiplicación = (num1, num2)=> num1 * num2;

const división = (num1, num2)=> num1 / num2;

const modulo = (num1, num2)=> num1 % num2;

const potencia = (num1, num2)=> num1**num2; 

var num1 = prompt("ingresa un numero 1: ");
var num2 = prompt("ingresa un numero 2: ");
var operación = prompt("ingresa la operación que deseeas (+,-,*,/,%,**): ");
num1 = Number(num1);
num2 = Number(num2);

var resultado = 0;
if(operación == "+" )
    resultado = suma(num1, num2);
else if(operación == "-" )
    resultado = resta(num1, num2);
else if(operación == "*" )
    resultado = multiplicación(num1, num2);
else if(operación == "/" )
    resultado = división(num1, num2);
else if(operación == "%" )
    resultado = modulo(num1, num2);
else if(operación == "**" )
    resultado = potencia(num1, num2);
else
    console.log("no funca")
console.log("el resultado es "+ operación +" es " +resultado);
