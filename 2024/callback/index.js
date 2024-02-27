/**
 * callback function 
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 */

//example - 1

// const display = (result) =>{
//     console.log(result); //display the result in the console
// }

// const calculator = (a, b,callback) =>{
//     let sum = a + b;

//     if (callback) {
//         callback(sum);
//     }

//     return sum;
// }

// const result = calculator(5,2,display);
// console.log(result);


//example 2   

const paymentStatus = true;
const mark = 70;



const enroll = (callback) =>{
    console.log('course enrollment is in progress.....');

    setTimeout(()=>{
        if (paymentStatus) {
            callback();
        } else {
            console.log('Payment failed!');
        }
    },200)
}

const progress = (callback) =>{
    console.log('course on progress.....');
    setTimeout (() =>{
        if (mark => 80) {
            callback();
        } else {
            console.log('You could not get enogugh mark to get the certificate');
        }
    },1000)
}


const getCertificate = () =>{
    console.log('Preparing your certificate');

    setTimeout(() => {
        console.log('Congratulations! Your Certificate has been prepared. Please collect it from our office');
    },3000)
}



enroll(function(){
    progress(getCertificate);
});
