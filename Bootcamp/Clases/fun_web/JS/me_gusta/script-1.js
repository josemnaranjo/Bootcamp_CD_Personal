const likesCount = document.querySelector(".cuenta-likes");

likesCount.innerText ="0 like(s)";

let count = 0;

function addLike() {
    count++;
    likesCount.innerText = count +" like(s)"
}