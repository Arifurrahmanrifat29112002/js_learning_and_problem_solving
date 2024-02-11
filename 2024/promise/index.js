/**
 * promise
 */

//example -1
    // const status = true;
    // console.log('Task 1');

//define promise
    // const promise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         if (status) {
    //            resolve('Task 2');
    //         } else {
    //             reject('somthis wrong');
    //         }
    //     },1000)
    // })

    // console.log('Task 3');

//call promise
    // promise
    //     .then((value) => {
    //         console.log(value);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })



//example --2
const paymentStatus = true;
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


enroll()
.then(progress)
.then(getCertificate)
.then((value) => {
    console.log(value); 
})
.catch(e => console.log(e))





