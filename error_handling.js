/**
 * 57.how to handle error in JavaScript (part-1) try,catch,finally
 */

//example
    // try{
    //     test code
    // }catch(err){
    //     handle error
    // }

//example with try,catch block
    // try{
    //     alert("hello world");//show
    //     alert(x);
    //     alert("bye");// not show
    // }catch(err){
    //     console.log('Error: ' + err.message);
    // }

/**
 * 58.how to handle error in JavaScript (part-2) throw
 */

// example of using throw keyword
    // try{
    //     var num = prompt("Enter a number between 5 to 10");
    //     if(num < 5){
    //         throw("Input number is too low");
    //     }else if(num > 10){
    //         throw("Input number is too high");
    //     }
    // }catch(err){
    //     console.log("error"+ err);
    // }finally{
    //     console.log("Input number is "+ num);
    // }
