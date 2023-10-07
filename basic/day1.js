 //class -4 number method | toFixed |toPrecision

 //convert intiger to string
 var num = 10;
 num = toString(num);
 console.log(typeof(num));//output:string

 //toFixed()
 var num1= 2.3564;
 console.log(num1.toFixed(2));//output : 2.36

 //toPrecision()  A method formates a number to a specified length
 var num2 = 2.3564;
 console.log(num2.toPrecision(2));//output :2.4


 //how to convert string to number 
 console.log(typeof(Number("123"))); //output : number
 //convert boolean to number
 console.log(Number(true));//output:1