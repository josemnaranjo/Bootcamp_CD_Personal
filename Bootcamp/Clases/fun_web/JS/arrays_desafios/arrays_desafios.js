//1. Siempre hambriento (si comida está en el arreglo, diga "delicioso". Si no aparace, "tengo hambre")

function siempreHambriento(arr){
    let countDeli = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
            countDeli ++
            }
        }
        if (countDeli === 0){
            console.log("Tengo hambre")
        }
    }


let arr1 = [3.14,"Hola", "pastel",true,"Chao"];
siempreHambriento(arr1);
let arr2 = [5.14,"comida", "pastel","Comida","Chao"];
siempreHambriento(arr2);


//2. Filtro de paso (dado un arreglo y un valor de corte, devuelve un arreglo con solo los valores mayores al valor de corte)

function highPass (arr,cutOff) {
    let filteredArr = [];
    for (let i = 0 ; i < arr.length ; i++ ){
        if (arr[i] > cutOff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
} 

let testHighPass = highPass ([0,4,6,7,3,4,1,2,0],2) 
console.log(testHighPass);

//3. Mejor que el promedio (devolver un recuento de cuantos de los números son mayores que el promedio)

function betterThanAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum / arr.length
    
    let count = 0;
    for(let i = 0; i< arr.length;i++){
        if(average < arr[i]){
            count++
        }
    }
    return count;
}

let testBetterThanAverage = betterThanAverage([6,8,3,10,-2,5,9])
console.log(testBetterThanAverage);

//4. Arreglo invertido (funcion que entregue los valores invertidos del arreglo original)

function reverse(arr) {
    let arrReversed = [];
    for(let i = 0; i < arr.length; i++){
        arrReversed.unshift(arr[i]);
    }
    return arrReversed;
}

let testReverse = reverse(["a","b","c","d","e"]);
console.log(testReverse);

//5. Arreglo fibonacci (agregar n, y entrega un array con con la secuencia fibonacci de "n" numeros)

function fibonacciArray(n){
    let fibArr = [0,1];
    if(n>=2){
        for(let i=2; i<n; i++){
            let ultNum = fibArr[i-1] + fibArr[i-2];
            fibArr.push(ultNum);
        }
    } else if (n ===1){
        fibArr = [0];
    }
    return fibArr
}

let result = fibonacciArray(10);
console.log(result);