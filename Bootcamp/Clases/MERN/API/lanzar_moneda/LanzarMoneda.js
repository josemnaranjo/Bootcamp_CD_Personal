function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
    }

    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCounts = 0;
            let attemps = 0;
            while(headsCounts<5){
                attemps++;
                let result = tossCoin()
                if(result ==="heads"){
                    headsCounts++
                }else{
                    headsCounts=0;
                }
                if(headsCounts===5){
                    resolve(`Se requirieron ${attemps} intentos para obtener 5 caras seguidas`)
                }
                if(attemps>100){
                    reject("La moneda se ha lanzado más de 100 veces")
                }
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    