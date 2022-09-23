//POO

PPTO_EMPRESA = 6000; //esta es una forma de definir una constante global, para todo el documento

class Trabajador {
    constructor(nombre, edad, sueldo){
        this.nombre= nombre;
        this.edad = edad;
        this.billetera =0;
        this.sueldo = sueldo;
    }
    
    saludar() {
        console.log(`${this.nombre} : Hola!`);
        return this //devolvemos el objeto creado
    }
}

//instanciar (crear) un nuevo trabanador

const trabajador1 = new Trabajador("Alavaro", 30, 2000);

console.log(trabajador1.saludar());


class Desarrollador extends Trabajador {
    constructor(nombre,edad,sueldo){
        super(nombre,edad,sueldo); //esto activa el this.nombre ... de la clase padre Trabajador
        this.metasmensuales = 0;

    }
    cumplirMetas(metasCumplidas){
        this.metasmensuales +=metasCumplidas;
    }
}


const desarrollador1 = new Desarrollador ("Carlo", 30,5000);

console.log(desarrollador1);

desarrollador1.cumplirMetas(4);

console.log(desarrollador1);


class Contador extends Trabajador {
    constructor(nombre,edad, sueldo){
        super(nombre,edad,sueldo)
    }
    pagarSueldo(trabajador) {
        if(PPTO_EMPRESA < trabajador.sueldo) {
            console.log("La emprea no tiene suficientes fondos para pagarle a" + trabajador.nombre)
        } else {
            console.log("Se le ha pagado satisfactoriamente a" + trabajador.nombre);
            trabajador.billetera += trabajador.sueldo;
            PPTO_EMPRESA -= trabajador.sueldo;
            if(trabajador.metasmensuales >= 3){
                console.log("El trabajador ha ganado un bono extra de 500");
                trabajador.billetera +=500;
                PPTO_EMPRESA -= 500;
            }
        }
    }
}


const contador1 = new Contador("Dani", 30, 20000);
console.log(contador1);


contador1.pagarSueldo(desarrollador1);
console.log(desarrollador1);
console.log(PPTO_EMPRESA);