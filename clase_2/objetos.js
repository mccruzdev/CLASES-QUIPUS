let richard = {
    nombre: "Richard",
    apellido: "Abanto",
    edad: 36,
    sexo: 'M',
    masculito : true,
    femenino :false,
    direccion: {
        departamento: "La libertad",
        provincia: "Chepen",
        distrito: "Pueblo Nuevo"
    },
    nombreCompleto : function(){
        return this.nombre + " "+this.apellido;
    }
    
};

console.log(richard.nombreCompleto());

class Persona{
    nombre;
    apellido;
    direccion;
    fechaNacimiento;

    constructor(nombre, apellido, direccion, fechaNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar() {
        return "hola";
    }

    set sexo(param){
        this.nombre = "Sr/Sra "+this.nombre;
    }

    get sexo(){
        console.log("La persona no tiene sexo definido");
    }

}

for(propiedad in richard){
    console.log(richard[propiedad]);
}

var p1 = new Persona("Heberth", "Deza", "Guadalue", "27/09/1988");
console.log(p1);

console.log(p1.nombre);
console.log(p1["nombre"]);

console.log(richard);
console.log(richard.direccion);

richard.direccion.zip = 18016;
console.log(richard.direccion);

delete richard.direccion.zip;
console.log(richard.direccion);

dir = {
    departamento: "La libertad",
    provincia: "Pacasmayo",
    distrito: "Guadalupe"
}

richard.direccion = dir;
console.log(richard);


function saludar(){
    console.log("Hola mundo ...");
}

saludar();
saludar.descripcion = "esta funcion saluda"

console.log(saludar);

function otraFuncion(fn){
    fn();
}

otraFuncion(saludar);

var miFuncion = function(){
    console.log("mi funcion");
};

miFuncion();

var a = 20;
var b = 30;
console.log(a)
console.log(b)
b=a
console.log(b)

var p1 = new Persona("Heberth", "Deza", "Guadalue", "27/09/1988");
console.log(p1);
var p2 = new Persona("Richard", "Abanto", "Chepen", "04/11/1987");
console.log(p2);

var p3 = p2;
console.log(p3);

p3.nombre = "Alexander"
console.log(p2);

var a = 20;
b=a

console.log(a);
console.log(b);
function cambiarValor(param){
    a = param;
}
cambiarValor(30)
//cambiarValor(b)
console.log(a);
console.log(b);

console.log(p1);
console.log(p2);
p2=p1
p1.nombre = "Carlos";
p2.apellido = "Ortiz";
console.log(p1);
console.log(p2);

for (let keys in p1)
{
    console.log(keys);
}

console.log(p1.sexo);
console.log(Object.keys(p1))
console.log(Object.values(p1))
console.log(Object.entries(p1))