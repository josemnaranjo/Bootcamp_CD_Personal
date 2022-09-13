function removeCookies() {
    const cookieCont = document.getElementById("cookieCont");
    cookieCont.remove();
}

function alertCart() {
    alert("Your Cart is empy!")
}

function changeSrc(element) {
    element.src = "assets/succulents-2.jpg";

}

function returnSrc(element) {
    element.src = "assets/succulents-1.jpg"
}