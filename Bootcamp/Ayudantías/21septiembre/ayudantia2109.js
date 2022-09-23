//Repetir n veces los valores de un arreglo

const arr = ["Daniela","Josemaria","Carlo"];

function repetirValores (arreglo,n) {
    
    const aux = [];

    for(let i = 0; i<arreglo.length; i++){
        for(let j=0; j<n;j++){
            aux.push(arreglo[i])
        }
    }

    return aux
}

console.log(repetirValores(arr,3));

//VERSION FLECHA

const repetirValoresFlecha = (arreglo,n)=> {
    const aux = [];

    for(let i = 0; i<arreglo.length; i++){
        for(let j=0; j<n;j++){
            aux.push(arreglo[i])
        }
    }

    return aux
}


//DESESTRUCTURACION

const user = {
    firstName: "Vicente",
    lastName: "Peralta",
    email: "vperalta@codingdojo.cl",
    password: "clave1234",
    hobbys:["programar", "basket","futbol"]
}

const {firstName} = user; 
//transformar el valor de un key en una variable. 
//La variable creada es ajena al objeto, es decir, que si la modifico, no se cambia el valor en el objeto.
//A menos que sea un array

console.log(firstName);

const {lastName:apellido} = user; //cambiar la denominación de un key

console.log(apellido);

//USO: cuando queremos pasar parametros

function mostrarClave({password}){
    console.log("Hola" + password);
}

mostrarClave(user);

//DESESTRUCTURAR ARRAYS

const animales = ["perro", "gato", "tortuga","pajaro","jirafa"];

const [primerAnimal, segundoAnimal,tercerAnimal] = animales;
//similar a objeto, pero como no hay key, se usa el indice del elemento en el array

console.log(segundoAnimal);

const [, , , cuartoAnimal] = animales;
//las comas definen los elementos a los cuales estoy apuntando con la desestructuracion.

console.log(cuartoAnimal);


//SPREAD - permite tomar el objeto entero e incorporarlo a un nuevo elemento


const user3 = {...user,edad:35} 
//los tres puntos copian todos los elementos de "user"
//no es una copia perfecta. Si modifica un valor del original, la copia no se modifica.
//A menos que la modificacion que sea a un arreglo, ya que si modifico el original, cambiará la copia.

console.log(user3);


//REST  

const user2 = {
    firstName: "Vicente",
    lastName: "Peralta",
    email: "vperalta@codingdojo.cl",
    password: "clave1234",
    hobbys:["programar", "basket","futbol"]
}

const {firstName:nombre4, ...otrasPropiedades} = user2;
//Para los objetos es mandatorio que el rest element debe estar al final

console.log(otrasPropiedades);

const arr2 = ["Daniela","Josemaria","Carlo","Carlos","Javi"];

const [,nombre2,...otrosNombres] = arr2;

console.log(otrosNombres);