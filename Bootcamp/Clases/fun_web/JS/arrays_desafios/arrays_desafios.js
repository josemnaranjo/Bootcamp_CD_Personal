//1. Siempre hambriento (si comida está en el arreglo, diga "delicioso". Si no aparace, "tengo hambre")

function siempreHambriento(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso");
        } 
    }
}

let arr1 = [3.14,"comida", "pastel",true,"comida"];

siempreHambriento(arr1);
