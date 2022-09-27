class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(nombre){
        console.log(this.nombre);
    }
    showStats(nombre){
        console.log(this.nombre,"Fuerza: " + this.fuerza, "Velocidad: " + this.velocidad, "Salud: " + this.salud);
    }
    drinkSake (){
        this.salud +=10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(nombre,salud,velocidad,fuerza, sabiduria){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();