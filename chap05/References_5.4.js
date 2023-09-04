
var Car = {
    brand : "audi",
    price : 5000000,
    color : "white"
};

console.log("Car details before updating : ",Car);

function getUpdatedCarDetails(carObj){
    carObj.brand = "benz";
    carObj.color = "red"
}

getUpdatedCarDetails(Car)
console.log("Car details after updating : ",Car);


