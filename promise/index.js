/**
 * 76.promise part-1---promise by defult Asynchronous
 * how to create promise
 * how to use promise
 * how to run multiple promise all
 * race
 * promise chaning
 */

//Create Promise
    // const promiseOne = new Promise((resolve,reject) => {
    //     let promise = true;
    //     if (promise) {
    //         resolve("promise Complete")
    //     }else{
    //         reject(new Error('promise not Complete'))
    //     }
    // })

    // promiseOne
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // })

 // how to run multiple promise all
    // const promiseOne = new Promise((resolv,reject) => {
    //     let work_complete = true;
    //     if (work_complete) {
    //         resolv("work complete");
    //     }else{
    //         reject(new Error("work not complete"))
    //     }
    // })

    // const promiseTwo = new Promise((resolv,reject) => {
    //     let pay_salary = true;
    //     if (pay_salary) {
    //         resolv("Alrady pay salary");
    //     }
    // })

    // Promise.all([promiseOne,promiseTwo])
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((error) => {
    //     console.log(error.message);
    // })


  //race()
    // const promiseOne = new Promise((resolv,reject) => {
    //     setTimeout(() => {
    //         resolv("work complete");
    //     },2000)
    // })

    // const promiseTwo = new Promise((resolv,reject) => {
    //     setTimeout(() => {
    //         resolv("Alrady pay salary");
    //     },3000)
    // })
    // Promise.race([promiseOne,promiseTwo])
    // .then((res) => {
    //     console.log(res);
    // })
 //chaning and Asynchronous
    console.log("start");//synchronous

    const taskone = () => {
        return new Promise((resolve,reject) =>{
            reject('task one not complete');
        })
    }

    const tasktwo = () => {
        return new Promise((resolve,reject) =>{
           setTimeout(() => {
                resolve('task two done')
           },2000)
        })
    }

    const taskthree = () => {
        return new Promise((resolve,reject) =>{
            resolve('task three done');
        })
    }

    const taskfore = () => {
        return new Promise((resolve,reject) =>{
            resolve('task fore done');
        })
    }


    taskone()
    .then((response) => console.log(response))
    .then(tasktwo)
    .then((response) => console.log(response))
    .then(taskthree)
    .then((response) => console.log(response))
    .then(taskfore)
    .then((response) => console.log(response))
    .catch((err) => {
        console.log(err);
    })

    console.log("end");//synchronous

