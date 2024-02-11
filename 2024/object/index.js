/**
 * object
 */

const car = {
    model:'bmw24',
    brand:'BMW',
    year: 2023,
    color : 'black',
    owner :'John Doe',
    drive :function () {
        console.log(`The ${this.brand} ${this.model} is driving on the road`);
    },
    start :function (){
        console.log( `Starting the engine of the ${car.brand} ${car.model}` );
        setTimeout(()=>{
           this.drive();
        },500)
    }
}


 console.log(car.brand);// BMW
 car.start(); // Starting the engine of the BMW bmw24
                   // The BMW bmw24 is driving on the road