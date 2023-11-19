let persona = {
    'nombre': "Richard",
    'apellido': "Abanto",
    'edad': 36,
    'sexo': 'M',
    'masculino' : true,
    'femenino' :false,
    nombreCompleto : function(){
        return this.nombre + " "+this.apellido;
    }
    
};

console.log(persona.nombreCompleto());

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
}

for(propiedad in persona){
    console.log(persona[propiedad]);
}

let p1 = new Persona("Heberth", "Deza", "Guadalue", "27/09/1988");
console.log(p1);