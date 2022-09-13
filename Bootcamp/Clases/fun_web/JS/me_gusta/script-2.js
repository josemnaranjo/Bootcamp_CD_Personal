const counterOne = document.querySelector(".like-counter-box-one");

const counterTwo = document.querySelector(".like-counter-box-two");

const counterThree = document.querySelector(".like-counter-box-three");

counterOne.innerText = "9 like(s)";

counterTwo.innerText = "12 like(s)";

counterThree.innerText = "9 like(s)";

let countOne = 9;
let countTwo = 12;
let countThree = 9;

function addLikeOne() {
    countOne++
    counterOne.innerText = countOne + " like(s)"
} 

function addLikeTwo() {
    countTwo++
    counterTwo.innerText = countTwo + " like(s)"
} 


function addLikeThree() {
    countThree++
    counterThree.innerText = countThree + " like(s)"
} 