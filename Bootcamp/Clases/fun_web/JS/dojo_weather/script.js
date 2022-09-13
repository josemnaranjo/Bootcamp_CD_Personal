function displayAlert() {
    alert("Loading weather report...")
}

function removeCookiesMsg() {
    const cookieContainer = document.querySelector(".cookie-container");
    cookieContainer.remove();
}

function celToFahren(element) {

    let sistemaDeTemp = element.value;

    //seleccion de variables y transformacion en num
    const maxTempOne = document.querySelector(".max-temp-one");
    const minTempOne = document.querySelector(".min-temp-one");
    
    let strMaxTempOne = maxTempOne.innerText
    strMaxTempOne = strMaxTempOne.slice(0,2);
    let numMaxTempOne = +strMaxTempOne;
    
    let strMinTempOne = minTempOne.innerText;
    strMinTempOne = strMinTempOne.slice(0,2);
    let numMinTempOne = +strMinTempOne;

    const maxTempTwo= document.querySelector(".max-temp-two");
    const minTempTwo = document.querySelector(".min-temp-two");

    let strMaxTempTwo = maxTempTwo.innerText;
    strMaxTempTwo = strMaxTempTwo.slice(0,2);
    let numMaxTempTwo = +strMaxTempTwo;
    
    let strMinTempTwo = minTempTwo.innerText;
    strMinTempTwo = strMinTempTwo.slice(0,2);
    let numMinTempTwo = +strMinTempTwo;

    const maxTempThree = document.querySelector(".max-temp-three");
    const minTempThree = document.querySelector(".min-temp-three");

    let strMaxTempThree = maxTempThree.innerText;
    strMaxTempThree = strMaxTempThree.slice(0,2);
    let numMaxTempThree = +strMaxTempThree;

    let strMinTempThree = minTempThree.innerText;
    strMinTempThree = strMinTempThree.slice(0,2);
    let numMinTempThree = +strMinTempThree;

    const maxTempFour = document.querySelector(".max-temp-four");
    const minTempFour = document.querySelector(".min-temp-four");

    let strMaxTempFour = maxTempFour.innerText;
    strMaxTempFour = strMaxTempFour.slice(0,2);
    let numMaxTempFour = +strMaxTempFour;

    let strMinTempFour = minTempFour.innerText;
    strMinTempFour = strMinTempFour.slice(0,2);
    let numMinTempFour = +strMinTempFour;

    
    
    if (sistemaDeTemp == "Fº"){
        // transforma Cº a Fº
        let numMaxTempOneFahr = Math.round((numMaxTempOne*1.8) +32);
        let numMinTempOneFahr = Math.round((numMinTempOne*1.8) +32);
    
        let numMaxTempTwoFahr = Math.round((numMaxTempTwo*1.8) +32);
        let numMinTempTwoFahr = Math.round((numMinTempTwo*1.8) +32);
        
        let numMaxTempThreeFahr = Math.round((numMaxTempThree*1.8) +32);
        let numMinTempThreeFahr = Math.round((numMinTempThree*1.8) +32);
    
        let numMaxTempFourFahr = Math.round((numMaxTempFour*1.8) +32);
        let numMinTempFourFahr = Math.round((numMinTempFour*1.8) +32);
    
        //Transformar Temp Fº a str
    
        let strMaxTempOneFa = numMaxTempOneFahr.toString()+"º";
        let strMinTempOneFa = numMinTempOneFahr.toString()+"º";
    
        let strMaxTempTwoFa = numMaxTempTwoFahr.toString()+"º";
        let strMinTempTwoFa = numMinTempTwoFahr.toString()+"º";
    
        let strMaxTempThreeFa = numMaxTempThreeFahr.toString()+"º";
        let strMinTempThreeFa = numMinTempThreeFahr.toString()+"º";
    
        let strMaxTempFourFa = numMaxTempFourFahr.toString()+"º";
        let strMinTempFourFa = numMinTempFourFahr.toString()+"º";
    
        //insertar Fº en espacios correspondientes
        maxTempOne.innerText = strMaxTempOneFa;
        minTempOne.innerText = strMinTempOneFa;
    
        maxTempTwo.innerText = strMaxTempTwoFa;
        minTempTwo.innerText = strMinTempTwoFa;
        
        maxTempThree.innerText = strMaxTempThreeFa;
        minTempThree.innerText = strMinTempThreeFa;
    
        maxTempFour.innerText = strMaxTempFourFa;
        minTempFour.innerText = strMinTempFourFa;
        
        
    } else if (sistemaDeTemp =="Cº"){
        maxTempOne.innerText = "24ª";
        minTempOne.innerText = "18º";
    
        maxTempTwo.innerText = "27º";
        minTempTwo.innerText = "19º";
        
        maxTempThree.innerText = "21º";
        minTempThree.innerText = "16º";
    
        maxTempFour.innerText = "26º";
        minTempFour.innerText = "21º";

    }



}


