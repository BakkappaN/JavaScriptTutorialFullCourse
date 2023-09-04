class Car {

    printCarBrand(brand){
        console.log("Car brand is : ",brand);
    }

    printCarColor(color){
        console.log("Car color is : ",color);
    }
}

//create object
var carObj = new Car();
carObj.printCarBrand("benz");

carObj.printCarColor("red");