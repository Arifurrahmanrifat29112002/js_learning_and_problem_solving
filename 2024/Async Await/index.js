/**
 * Async - await
 */
//example --1

const paymentStatus = false;
const marks = 85;



const enroll = ()=>{
    console.log('course enrollment is in progress.');

    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (paymentStatus) {
                resolve();
            } else {
                reject("Payment failed");
            }
        },500);
    });

    return promise;
}

const progress = () =>{
    console.log('course on progress');

    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (marks >= 80) {
                resolve();
            } else {
                reject('You could not get enogugh mark to get the certificate');
            }
        },500);
    });
    return promise;
}


const getCertificate = () => {
    console.log('Preparing your certificate');

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Congratulations! Your Certificate has been prepared. Please collect it from our office');
        }, 500);
    });

    return promise;
}


//call promise

// enroll()
// .then(progress)
// .then(getCertificate)
// .then((value) => {
//     console.log(value); 
// })
// .catch(e => console.log(e))

async function course (){
    try {
        await enroll();
        await progress();
        let message = await getCertificate();//return message
   
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

//call async function
course();
