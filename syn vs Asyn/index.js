
//synchronous --- js by defult synchronous 
console.log("one");
console.log("two");
console.log("three");


//Asynchronous 
const Task1 =()=>{
    console.log("Task 1")
}
const dataLoading = () =>{
    console.log("Data Loading Task 2")
}
const Task2 = () =>{
    setTimeout(dataLoading,2000)
}

const Task3 = () =>{
    console.log("Task 3")
}

const Task4 = () =>{
    console.log("Task 4")
}

//call
Task1()
Task2()
Task3()
Task4()