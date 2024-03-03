 /**
 * Closure
 * closures is a function having access parent scope, even after the parent function has closed.
 */


// const temporary = () =>{
//     let counter = 0;

//     return () => {
//         counter += 1;
//     }
// }

// const add = temporary(); //add is a funtion  returned by temporary()

// console.dir(add);

// add();//1
// add();//2
// add();//3



/**
 * Clouser -> A function inside of another function the inner function has access to the variables
 *            and scope of the outer function. Allow for private variables and state mantenance use
 *            frequently in js framework React, Vue, Angular.
 */

const CounterGame = () => {
   let score = 0;

   const IncrementScore = (points) => {
         score+= points;
         console.log(`+${points}`);
   }

   const DecrementScore = (points) => {
    score-= points;
    console.log(`-${points}`);
   }

   const GetScore = () =>{
    console.log(`Currently Total Scroe: ${score}`);
   }
   const  ResetScore = () => {
       score = 0;
       console.log('Reset');
   }

   return {IncrementScore, DecrementScore, GetScore, ResetScore}
}

const Game = CounterGame();

console.dir(Game);

Game.IncrementScore(5);
Game.IncrementScore(5);
Game.DecrementScore(2);
Game.GetScore(); // Currently Total Score: 7

Game.ResetScore()

Game.GetScore(); // Currently Total Score: 0