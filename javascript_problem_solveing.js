//Task-1 create marks genaretor for example [(80-100 = A+)]
//solution:

     var marks = parseFloat(prompt('Enter your subject marks :'));
     if (marks >100 || marks<0)
       document.write("Enter valid number");
     else if(marks >= 80 && marks <= 100)
       document.write(marks + " Letter Grade " + " A+ " + " Grade Point " +"5");
     else if(marks >= 70 && marks <= 79)
       document.write(marks + " Letter Grade " + " A " + " Grade Point" +"4");
     else if(marks >= 60 && marks <= 69)
       document.write(marks + " Letter Grade " + " A- " + " Grade Point " +"3.5");
     else if(marks >= 50 && marks <= 59)
       document.write(marks + " Letter Grade " + " B " + " Grade Point " +"3");
     else if(marks >= 40 && marks <= 49)
       document.write(marks + " Letter Grade " + " C " + " Grade Point " +"2");
     else if(marks >= 33 && marks <= 39)
       document.write(marks + " Letter Grade " + " D " + " Grade Point " +"1");
     else
       document.write(marks + " Letter Grade " + " F " + " Grade Point " +"0");

//Task-2 write a program that print sum of all the numbers that are division by 3 and 5 from 1-100
//solution:

    var startNumber = 1;
    var endNumber = 100;

    var x = startNumber;

    var sum = 0;
    while(x <= endNumber){
       if(x%3 == 0 && x%5 == 0){ 
          sum = sum+x;
       }
       x++;
    }
    document.write("sum"+ sum);

//Task -3 get three number print large number use ternary operator
//solution

    var num1 = Number(prompt("Enter 1st Number :"));
    var num2 = Number(prompt("Enter 2nd Number :"));
    var num3 = Number(prompt("Enter 3rd Number :"));

    var result = num1>num2 && num1>num3 ? "large Number"+num1 : num2>num1 && num2>num3 ? "large Number"+num2 : "large Number"+num3;
    document.write(result);


// task-4 ->create calculator functon 
//solution
        //sum
        function sum(a,b){
            var result = a+b;
            document.write("sum "+ result +"<br\>");
        }
       
        //subtract
        function subtract(a,b){
            var result = a-b;
            document.write("subtract "+ result +"<br\>");
        }

        //multiply
        function multiply(a,b){
            var result = a*b;
            document.write("multiply "+ result +"<br\>");
        }

        //divide
        function divide(a,b){
           var result = a/b;
            document.write("divide "+ result +"<br\>");
        }

        //modulation
        function modulation(a,b){
            var result = a%b;
            document.write("modulation "+ result +"<br\>");
        }

        //call function 
           sum(10,20);//a,b
           subtract(10,20);
           multiply(10,20);
           divide(100,5);
           modulation(100,1000);

//task-5->create  an IIFEs that print sum of 2 numbers
//solutio          
    (function sum(a,b){
            var sum = a+b;
            document.write(`sum is ${sum}<br/>`);
    })(20,40);

/* Task-6
* create a function called highestScore that eill
*   .recive a 1D array called Scors
*   .return the highest Score
*/
//solution

    var score = [500,800,1000,100,200,0,5000];

    function highestScore(score){
        var score = score;
        score.sort((a, b) => b-a);   
        return score[0];
    }
    var max =  highestScore(score);

    console.log(max);
/*
* Task -7
* create a function called highestRunScore that will
*   .Recive a 2D array called playersInfo  
*   .Based on highest score return the name of the player
*/
//solutin
    var players = [
        ["Arif",12],
        ["Rifat",34],
        ["Mohasin",10],
        ["Mohasin",15],
        ["Mohasin",14],
    ];

    function highestRunScore(players){
        var playersInfo = players;
                    
        var highestRunScorer = playersInfo[0][0];
        var highestScore = playersInfo[0][1];
                        
                        
        for(var i=1; i<playersInfo.length; i++){

            if(highestScore<playersInfo[i][1]){

                highestScore = playersInfo[i][1];
                highestRunScorer = playersInfo[i][0]
                                
            }

        }
        return "The Highest Run Scorer is "+highestRunScorer+" with a score of:  "+highestScore ;
                    
                    
    }

    var display =  highestRunScore(players);
    console.log("Display : ",display)
