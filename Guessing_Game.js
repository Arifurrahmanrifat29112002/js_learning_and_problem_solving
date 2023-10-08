/**
 * 29.Guessing Game
 * Guess a number from 1 to 5
 * Generate random number between 1 to 5
 * if Guess number metch random number return you have won else you have lost
 * run the game of 5 time
 * show the game won and lost time
 */

var won = 0;
var lost = 0;

for(var i = 1; i<=5;i++){

    var guessNumber = parseInt(prompt("Enter guess number: "));
    var randomNumber = Math.floor(Math.random()*5)+1;
    if(randomNumber == guessNumber){
        console.log("you have won");
        won++;
    }else{
        console.log("You have lost .Random number was "+randomNumber);
        lost++ ;
    }

}

console.log('total you have won this game :'+ won);
console.log('total you have lost this game :'+ lost);