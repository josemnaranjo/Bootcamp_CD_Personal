//1.
console.log(hello);
var hello = "world";

//Elevacion:
//var hello
//console.log(hello) -- undefined
//hello = "world";

//2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle;
//function test(){var needle; needle ="magnet"; console.log(needle)}
//test(); -- se imprime "magnet"
//needle ="haystack"

//3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan;
//function print() {brendan ="only ok"; console.log(brendan)};
//brendan = "super cool";
//console.log(brendan) -- se imprime "super cool"

//4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var foo;
//function eat() {var food; food = "half-chicken";console.log(food); food = "gone"}
//food ="chicken";
//console.log(food) -- imprime "chicken";
//eat -- imprime "half-chicken"

//5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//var mean;
//mean() -- mean no es una funcion
//mean = function () {var food; food = "chicken"; console.log(food); food ="fish"; console.log(food)};
//console.log(food) 
//console.log(food) 


//6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
//function rewind () {var genre; genre="rock"; console.log(genre);genre ="r&b"; console.log(genre)}
//console.log(genre) -- undefined;
//genre ="disco";
//rewind -- imprime "rock", luego "r&b";
//console.log(genre) -- imprime "disco"

//7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//function learn() {var dojo; dojo="seattle"; console.log(dojo); dojo="burbank"; console.log(dojo)};
//dojo ="san jose";
//console.log(dojo) -- imprime "san jose";
//learn () -- imprime "seattle", luego "burbank";
//console.log(dojo) -- imprime "san jose";

//8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}

//function makeDojo(name,students) {
    //const dojo; dojo = {}; dojo.name = name; dojo.students = students; 
// if(dojo.students > 50) {dojo.hiring =true} 
    //else if (dojo.students <= 0) { dojo = "close for now"} 
    //return dojo }
//console.log(makeDojo("Chicago", 65)) -- imprime "Chigago, 65, True";
//console.log(makeDojo("Barkleley",0)) -- error porque se asigna un nuevo tipo de valor a una constante