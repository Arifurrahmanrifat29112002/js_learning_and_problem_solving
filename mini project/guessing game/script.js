//initialization

let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

//find,select and create 
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingGame");
const check = form.querySelector("#check");

const result = cardBody.querySelector("#gameResult");
const remaining = cardBody.querySelector("#remaining");

const wonLostMessage  = document.createElement("p");
wonLostMessage.classList.add("message")


const resetButton = document.createElement("button");
resetButton.setAttribute("type", "reset");
resetButton.innerText = "Reset";




form.addEventListener("submit", (e) =>{
    e.preventDefault();

    attempts++;
    if (attempts === totalAttempts) {
        guessingNumber.disabled = true;
        check.disabled = true;
        form.appendChild(resetButton)
    }

    if (attempts < totalAttempts+1) {
        metchNumber(guessingNumber);
        remaining.innerHTML = `Remaining attempts : ${totalAttempts - attempts}`
    }

    guessingNumber.value = " ";
})

const metchNumber = (guessingNumber) =>{
    const random = randomNumber(totalAttempts);
    const inputNumber = Number(guessingNumber.value);
    
    if (inputNumber === random) {
        result.innerHTML = `you have won`;
        totalWon++;
    } else {
        result.innerHTML = `you have lost; Random Number is : ${random}`;
        totalLost++;
    }

    remaining.innerHTML = 

    wonLostMessage.innerHTML = `Won : ${totalWon}, Lost : ${totalLost}`
    cardBody.appendChild(wonLostMessage);
}

const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit)+1;
}


//reset button 
resetButton.addEventListener('click', ()=>{
    location.reload();
})