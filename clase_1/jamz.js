// const person = {
//     firstName:"alex",
//     lastName:"chan"
// }

// const age = 20;

// let age2 = 10;

// age2=20;

// // person.firstName="Jose";

// age=5;
// console.log(person)

function suma(valor1, valor2) {
  let suma = valor1 + valor2;
  //return valor1+valor2;
  return suma;
}

const suma2 = (valor1, valor2) => {
  let suma = valor1 + valor2;
  return suma;
};

const suma3 = (valor1, valor2) => valor1 + valor2;

const result =[{ age: 20, name: "jose" }].filter((person) => person.age > 10);

console.log(result);
