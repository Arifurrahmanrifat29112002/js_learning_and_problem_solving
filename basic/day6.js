/**
 * 27.How to create and use object
 */

    // create a object 
    // var students= {
    //     name: 'Arif',
    //     roll: '137028',
    //     class: 'XII'
    // }
    // print object 
    // document.write(students.class);

    //create a constractor
    function Students(student_name,student_roll,student_class,lan){
        this.name = student_name,
        this.roll = student_roll, 
        this.class = student_class,
        this.lan = lan

        //add function in constractor function
        this.display = function(){
            document.write("Name : "+this.name+"<br>Roll No.: " +this.roll+ "<br>"+"Class :" +this.class+"<br>"+" lan "+this.lan +" <br> ");
        }
    }
    //create an object using the constuctor
    var student1 = new Students('arif','137028','xii',['en','bn']);
    var student2 = new Students('Rifat','1370','xii',['en','bn']);
    student1.display();
    student1.display();

/**
 * 28.Math Object
 */
//    var maximum = Math.PI;//3.141592653589793
//    console.log(maximum.toFixed(4));//3.1416

//    console.log(Math.sqrt(16));//4

//    var number1 = parseFloat(prompt("Enter first number:"));
//    var number2 = parseFloat(prompt("Enter second number:"));


//    console.log(Math.max(number1,number2));

   
//    console.log(Math.min(number1,number2));


/**
 * 29.Guessing Game
 * Guess a number from 1 to 5
 * Generate random number between 1 to 5
 * if Guess number metch random number return you have won else you have lost
 * run the game of 5 time
 * show the game won and lost time
 */

    // var won = 0;
    // var lost = 0;

    // for(var i = 1; i<=5;i++){

    //     var guessNumber = parseInt(prompt("Enter guess number: "));
    //     var randomNumber = Math.floor(Math.random()*5)+1;
    //     if(randomNumber == guessNumber){
    //         console.log("you have won");
    //         won++;
    //     }else{
    //         console.log("You have lost .Random number was "+randomNumber);
    //         lost++ ;
    //     }

    // }

    // console.log('total you have won this game :'+ won);
    // console.log('total you have lost this game :'+ lost);


/**
 * 30.Date object and date methods
 */
 var date = new Date();
 console.log(date);   
 console.log(date.getDate());//get date
 console.log(date.getFullYear());//get year
 console.log(date.getTime());//get milisecond

