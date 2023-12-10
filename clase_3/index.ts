console.log("Hola mundo desde typescript");

var num: number = 12;
var flag: boolean = false

console.log(num);

function sumar(num1:number, num2:number):number{
    return (num1+num2);
}

console.log(sumar(5,6));

/*if("" === 0)
{
    console.log("entro a la condicion")
}*/

var a = 5;

var str:string = <string> <any> a
//a="hola"

var obj = {
    name: "Richard",
    lastname: "Abanto",
    age: 36
}

console.log(obj)

var c: any;
console.log(c);
c = true;
console.log(c);
c = 5;
console.log(c);
c= "Hello"
console.log(c);


if(false)
{
    var x = 5;
}
console.log(x)

function restar(num1: number, num2:number):number{
    var resto = num1 - num2;
    return resto;
}

console.log(restar(20,5))
console.log(a)
console.log(-a)

if(true || false){
    console.log(true)
}

function calcularImpuesto(monto: number,  igv:number = 0.18): number{
    return monto*igv;
}

console.log(calcularImpuesto(100, 0.19))
console.log(calcularImpuesto(100))

var fn = new Function("a","b", "return a*b")
console.log(fn(5,4))

class Book {
    private title: string;
    private author: string;
    public isbn: string;
    public date_published: string;

    constructor(title:string, author:string, isbn:string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.date_published = "10/12/2023"
    }

    showDuebt():void{
        console.log("showDuebt");
    }

    feddback():void{
        console.log("feddback");
    }

    setTitle(title:string):void{
        this.title = title;
    }
}

var b1 = new Book("Mi planta de naranja lima", "Joe Vasconcelos", "ISBN-1234567890");
b1.isbn = "ISBN-123456789xyz"
b1.setTitle("Los miserables")

console.log(b1);


class Shape {
    area: number;

    constructor(a: number){
        this.area = a;
    }
}

class Circulo extends Shape {
     radio: number;

    constructor(r: number, a:number = 0){
        super(a);
        this.radio = r;
    }

    calcularArea():void {
        this.area = (3.1416 *this.radio*this.radio)/2;
    }
}

var circulo = new Circulo(5);
console.log(circulo);
circulo.calcularArea();
console.log(circulo.radio);


interface IPersona {
    nombre:string;
    apellido:string;
    saludar: ()=>string;
}

var cliente = {
    nombre: "Heberth",
    apellido: "Deza",
    saludar: function(){
        return "Hola "+this.nombre+" "+this.apellido;
    }
}
console.log(cliente.saludar());
cliente.nombre = "Joel";
console.log(cliente.saludar());
console.log(cliente)

class Usuario implements IPersona {
    nombre: string;
    apellido: string;
    sexo:string;
    edad: number;

    constructor(nombre:string, apellido:string, sexo:string, edad:number = 0){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }

    saludar():string{
        return "Hi "+this.apellido;
    }
}

var user = new Usuario("Alex", "Chang", "Varon", 20);
console.log(user);
console.log(user.saludar());

interface IPunto2D {
    x:number;
    y:number;
}

function sumarPuntos(p1:IPunto2D, p2:IPunto2D){
    let x = p1.x + p2.x;
    let y = p1.y + p2.y
    return {x:x,y:y};
}

var p1 ={x:0, y:10};
var p2 = {x:5, y:-3};
console.log(sumarPuntos({x:10,y:-8},p2))