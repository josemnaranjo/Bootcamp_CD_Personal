

function addRemoveContact(element) {

    //reconocer qué btn se clickeo
    let btnClick = element.id;

    //seleccion de contacto a borrar
    const contactoBoxOne = document.querySelector(".contacto-box-one");
    const contactoBoxTwo = document.querySelector(".contacto-box-two");
    
    if(btnClick == "a1") {
        //suma de +1 a Connection Requests
        const numConnReq = document.querySelector(".numC")
        let strNumberCon = numConnReq.innerText;
        let numNumCon = +strNumberCon;
        numNumCon++;
        numConnReq.innerText = numNumCon.toString();

        //restar numero de Your Connections
        const numYC= document.querySelector(".numYC")
        let strNumYC = numYC.innerText;
        let numNumYC = +strNumYC;
        numNumYC--;
        numYC.innerText = numNumYC.toString();
        
        //eliminar contacto
        contactoBoxOne.remove();

    } else if (btnClick == "a2") {
        //suma de +1 a Connection Requests
        const numConnReq = document.querySelector(".numC")
        let strNumberCon = numConnReq.innerText;
        let numNumCon = +strNumberCon;
        numNumCon++;
        numConnReq.innerText = numNumCon.toString();

         //restar numero de Your Connections
         const numYC= document.querySelector(".numYC")
         let strNumYC = numYC.innerText;
         let numNumYC = +strNumYC;
         numNumYC--;
         numYC.innerText = numNumYC.toString();
        
        //eliminar contacto
        contactoBoxTwo.remove();

    } else if (btnClick == "r1") {
        contactoBoxOne.remove();

    } else if (btnClick == "r2") {
        contactoBoxTwo.remove();
    }
}

function editProfile() {
    const nombreUsuario = document.querySelector("#userName");
    nombreUsuario.innerText = "Juan C. Bodoque"

}