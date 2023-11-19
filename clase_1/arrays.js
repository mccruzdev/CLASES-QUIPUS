var numbers = new Array(3);
console.log(numbers);
numbers[0]=1;
numbers[1]=3;
numbers[2]=2;
console.log(numbers);
var arreglo = [-1, 50, -34, "Richard", 'S', .59, true, false];
console.log(arreglo);
console.log(arreglo[5]);
console.log(arreglo.pop());// ELIMINA POR EL FINAL
console.log(arreglo);
arreglo.push(null); // INGRESA NULL A EL FINAL
console.log(arreglo);
console.log(arreglo.at(5));
console.log(arreglo.length); // TAMAÑO DEL ARREGLO
arreglo.length = 5
console.log(arreglo[7]);
console.log("antes del for");
for(var i =0;i<arreglo.length;i++)
{
    console.log(arreglo[i])
}
console.log("despues del for");
console.log("antes del for-in");
for (index of arreglo){
    console.log(index)
}
console.log("despues del for-in");

var fecha = "04/11/1987";
var arregloFecha = fecha.split("/")
console.log(arregloFecha);
console.log(arregloFecha.join("/"));

var letras = ['a', 'b', 'c'];
if(Array.isArray(letras))
{
    console.log("si es un arreglo");//aa
}
if(Array.isArray(fecha))
{
    console.log("si es un arreglo");
}
else
console.log("NO es un arreglo");

console.log(letras.includes("c"));
console.log(letras.indexOf("z"));


