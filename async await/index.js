/**
 * 77. async await javascript
 */
 // Asynchronous
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


//  taskone()
//  .then((response) => console.log(response))
//  .then(tasktwo)
//  .then((response) => console.log(response))
//  .then(taskthree)
//  .then((response) => console.log(response))
//  .then(taskfore)
//  .then((response) => console.log(response))
//  .catch((err) => {
//      console.log(err);
//  })

//async await look like synchronous but it's work asynchronous system

const callTasks = async () =>{
    try{
        const t1 =  await taskone()
        console.log(t1);
    
        const t2 =  await tasktwo()
        console.log(t2);
    
        const t3 =  await taskthree()
        console.log(t3);
    
        const t4 =  await taskfore()
        console.log(t4);
    }catch(e){
        console.error(e);
    }
}
callTasks();

console.log("end");//synchronous 

