const logStatus = document.querySelector(".logButton");
const addButton = document.querySelector(".greenButton")
const likedButton = document.querySelector(".buttonYellow");



function logOut() {
    logStatus.innerText = "Logout";
}


function removeButton() {
    addButton.remove();
}

function newNinja() {
    alert("Ninja was liked");
}