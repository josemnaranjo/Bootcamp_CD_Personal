function pizzaOven (tipoCorteza, salsa, quesos, toppings) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    return pizza
}


const pizzaChicago = pizzaOven("estilo Chicago","tradicional","mozzarella", ["pepperoni","salchicha"]);
console.log(pizzaChicago);


const pizzaEsp = pizzaOven("lanzada a mano","marinara",["mozzarella","feta"], ["champiñones","aceitunas","cebollas"]);
console.log(pizzaEsp);



const pizzaMarga = pizzaOven("delgada","tomate","mozzarella", "albahaca");
console.log(pizzaMarga);

const pizzaHawa = pizzaOven("delgada","tomate","mozzarella", ["jamón","piña"]);
console.log(pizzaHawa);