const prompt = require("prompt-sync")();

var arreglo = [1,5,7,8,9,95,57,4,5,15];
console.log(arreglo);

var mayor = -99999;
var menor = 99999;
for (let i of arreglo)
{
    console.log(i);
    if(i>mayor)
        mayor=i;
    if(i<menor)
    menor=i;
}

console.log("el mayor valor del arreglo es "+ mayor);
console.log("el menor valor del arreglo es "+ menor);

//const result =[{ age: 20, name: "jose" }].filter((person) => person.age > 10);


/* ARGUMENTOS INFINITOS CORREGIR

function findLargest (... args) { 
    let sorterArgs = args.sort(); 
    console.log(sorterArgs); 
    return sorterArgs [sorterArgs. Length - 1]; l
}
let  li
let largest findLargest (4,99 ,5, 30, 56, 0) 
console.log('The largest = s(largest))
*/