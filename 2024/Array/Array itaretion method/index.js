// const points = [40, 100, 1, 5, 25, 10];
// let text ='';

// points.forEach((point)=>{
//     text +=  `The value is${point}`;
// })
// console.log(text);

//array iteration method

/**
 * forEach()
 */
    // const numbers =[45,5,6,75,1];

    // function myFunction(value,index,array){
    //     console.log(value);
    //     console.log(index);
    //     console.log(array);
    //     console.log("----------------------");
    // }

//array method
    // numbers.forEach(myFunction);


/**
 * map()
 * create new array 
 * don't modify original array
 */
    // const numbers = [1,45,6,7,8,2];

    // function myfunction(value){
    //     return value * 2;
    // }
//array method
    // const newArray = numbers.map(myfunction);
    // console.log(newArray);

/**
 * filter()
 * create new array 
 * don't modify original array
 * filter values by condition
 */
    // const numbers = [20,1,5,9,5,50];

    // function myfunction(value,index,array){
    //     return value > 10;
    // }

 //array method
    // const newArray = numbers.filter(myfunction);
    // console.log(newArray);//(2) [20, 50]

    /**
     * reduce()
     * Find the sum of all numbers in an array
     * don't modify orginal array
     */
        // const numbers = [20,1,5,9,5,50];

        // function myfunction(total,value,index,array){
        //     return total + value;
        // }

    //array method
        // const sum = numbers.reduce(myfunction);
        // console.log(sum);//90
        // console.log(numbers);//[20,1,5,9,5,50]


    /**
     * every()
     * every() and filter() like same but 
       filter() create new array and don't
       modify orginal array but every() 
       doesn't create new array it just check the elements of array if they satisfy the condition or not.
    * every() check all elements in the array.
    */
        // const age = [20,5,5,9,5,50];

        // function myfunction(value,index,array){
        //     return value >18;//check all  value is greater than 18 or not
        // }

    //array method
        // const result = age.every(myfunction);
        // console.log(result); //false

    /**
     * some()
     * some() method doesn't create new array it just check the element of array if they satisfy the condition or not.
     * some() check single element in the array.
     */
        // const age = [20,5,30,15,5,50];

        // function myfunction(value,index,array){
        //     return value >18;//some over 18
        // }

    //array method
        // const result = age.some(myfunction);
        // console.log(result); //false

/**
 * indexOf()
 * indexOf() method searche  the element in the array and returns first position of element in an array
 */
    // const  arr=['apple','banana','cherry'];
    // let position = arr.indexOf('apple')+1;
    // console.log(position);//return  1