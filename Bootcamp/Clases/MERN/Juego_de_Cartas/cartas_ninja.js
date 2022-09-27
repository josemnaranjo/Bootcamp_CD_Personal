class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(objetivo){
        objetivo.res -= this.power;
        console.log(this.name +" ataca a "+objetivo.name);
    }
    showStats(){
        console.log(this.name + " tiene "+this.power + " de poder y "+ this.res + " de resiliencia." )
    }
}

class Effect extends Card {
    constructor(name,cost, text, stat, magnitude){
        super(name,cost);
        this.text = text
        this.stat = stat;
        this.magnitude=magnitude;
    }
    play(unit){
        if(unit instanceof Unit){
            unit[this.stat] += this.magnitude;
            console.log(this.text, "La carta afectada es "+unit.name);
        }else{
            console.log("Debes jugar esta carta a una carta Unit")
        }
    }
}



//Turno 1
const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
console.log("Jugador 1 invoca a " + redBeltNinja.name);
redBeltNinja.showStats();
const alDif = new Effect("Algoritmo difícil",2,"Aumenta la resiliencia del objetivo en 3","res",3);
console.log("El jugador 1 juega " + alDif.name +" a " + redBeltNinja.name);
alDif.play(redBeltNinja);
redBeltNinja.showStats();

//Turno 2
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
console.log("Jugador 2 invoca a " + blackBeltNinja.name);
blackBeltNinja.showStats();
const rechProme = new Effect("Rechazo de promesa no manejado",1,"Reduce la resiliencia del objetivo en 2","res",-2);
console.log("El jugador 2 juega "+ rechProme.name+ " a "+ redBeltNinja.name);
rechProme.play(redBeltNinja);
redBeltNinja.showStats();

//Turno 3
const progPare = new Effect("Programación en pareja",3,"Aumenta el poder del objetivo en 2","power",2);
console.log("El jugador 1 juega "+progPare.name+ " a "+ redBeltNinja.name);
redBeltNinja.showStats();
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();

