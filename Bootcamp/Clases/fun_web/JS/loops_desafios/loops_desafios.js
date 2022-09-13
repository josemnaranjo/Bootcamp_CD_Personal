

//1.imprimir numeros impares 0 a 20
for (let i=1; i<21;i++){
    if(i%2!=0){
        console.log(i);
    }
}

//2.disminuir múltiplos de 3
for(let i = 0; i<101;i++){
    if(i%3===0){
        console.log(i);
    }
}

//3.Imprimir secuencia 4,2.5,1,-0.5,-2,-3.5 (disminuye en 1.5)
for(let i=4; i>-4;i-=1.5){
    console.log(i);
}

//4. Sigma (sumar todos los valores entre 1 y 100)
function sigma (){
    let sum = 0;
    for (let i=1; i<101; i++){
        sum = sum + i;
    }
    console.log(sum);
}
sigma();

//5. Factorial (12!)
function factorial(){
    let product =1;
    for(let i=2; i<13;i++){
        product = product*i;
    }
    console.log(product)
}
factorial();