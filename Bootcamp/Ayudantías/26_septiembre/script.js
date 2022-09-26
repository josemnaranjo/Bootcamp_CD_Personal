//POO

class Card{
    constructor(nombre,costo){
        this.nombre = nombre;
        this.costo = costo;
    }

}


class PokemonCard extends Card {
    constructor(nombre,costo,salud,poder, tipos){
        super(nombre,costo);
        this.salud = salud;
        this.poder = poder;
        this.tipos = tipos;
    }

    atacar(pokemonAtacado){ //el pokemon que ataca ejecuta este metodo
        pokemonAtacado.salud -= this.poder;
        if(pokemonAtacado.salud< 0) {
            console.log("El pokemon" + pokemonAtacado.nombre+ " se ha desamayado");
        }
    }

    dormir(puntos) {
        this.salud += puntos;
    }
}

const charizard = new PokemonCard("Charizard", 3, 100, 15, ["Fuego", "Volador"]);

const pikachu = new PokemonCard("Pikachu", 3, 80, 10, ["Electrico"]);

console.log(charizard);
console.log(pikachu);


pikachu.atacar(charizard);

console.log(charizard);

class ElixirCard extends Card {
    constructor(nombre,costo,efecto,magnitud){
        super(nombre,costo);
        this.efecto = efecto;
        this.magnitud = magnitud;
    }
    aplicarElixir(pokemonAfectado){
        pokemonAfectado[this.efecto] = this.magnitud; //esta es otra forma de acceder a la propiedad de un objeto, la otra objeto.propiedad
    }
} 

const pocima = new ElixirCard("Pocima roja",3,"salud", 30);
const pocimaNegra = new ElixirCard("Pocima negra",3,"salud", -30);


class BombCard extends Card {
    constructor(nombre,costo,tipo,magnitud){
        super(nombre,costo);
        this.tipo = tipo;
        this.magnitud = magnitud;
    }

    lanzarBomba(pokemonAfectado){

        if(pokemonAfectado instanceof PokemonCard){ //buscar que hace instanceof: permite ver si un objeto contiene la propiedad consultada
            for (let i = 0; i <pokemonAfectado.tipos.length; i++ ){
                if(this.tipo === pokemonAfectado.tipos[i]){
                    pokemonAfectado.salud -= this.magnitud;
                }
            }
        } else {
            console.log("No se puede jugar una carta bomba a una carta que no sea del tipo Pokemon");
        }
    }

    lanzarBombas(pokemones) {
        for(let i =0; i< pokemones.length; i++){
            for(let j = 0; j < pokemones[i].tipos.length; j++){
                    if(this.tipos === pokemones[i].tipos[j]){
                        pokemones[i].salud -= this.magnitud;
                    }
            }
        }
    }
}

//otra forma hacer los que se hace en la linea 67 seria if(pokemonAfectado.tipos.includes(this.tipo){...})

const bombaAgua = new BombCard("Bomba de Agua",3, "Fuego", 50);

console.log(charizard);
bombaAgua.lanzarBomba(charizard);
console.log(charizard);


bombaAgua.lanzarBomba(pocimaNegra);