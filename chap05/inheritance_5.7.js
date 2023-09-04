class Parent {

    addTwoNumbers(number1,number2){
        return (number1+number2);
    }

}

class Child extends Parent {

    printMessage(){
        console.log("JavaScript tutorial full course");
    }

}

//create object
const childObj = new Child();
var result = childObj.addTwoNumbers(10,20);
console.log("Addition of 2 no.s is : ",result);

childObj.printMessage();
