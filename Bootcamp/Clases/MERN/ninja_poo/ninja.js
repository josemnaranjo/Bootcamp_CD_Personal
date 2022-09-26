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
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
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
