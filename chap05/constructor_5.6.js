class Car {
    // constructor () {
    //     console.log("The car brand is NISSAN");
    // }

    constructor (brand,color) {
        console.log("The car brand is : ",brand);
        console.log("The car color is : ",color);
    }

    printMessage(){
        console.log("JavaScript tutorial full course");
    }
}

//var carObj = new Car();

var carObj = new Car("benz","white");
var carObj2 = new Car("audi","red");

carObj2.printMessage();