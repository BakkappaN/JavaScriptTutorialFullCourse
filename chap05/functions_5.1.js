
function speakSomething() {
    console.log("Good morning!");
    console.log("Good afternoon!");
    console.log("Good night!!");
}

speakSomething();
console.log("===============");

speakSomething();
console.log("===============");

speakSomething();
console.log("===============");


function addTwoNumbers(number1,number2) {
    return (number1+number2);
}

var result1 = addTwoNumbers(10,20);
console.log("The addition of 2 no. is : ",result1);

var result2 = addTwoNumbers(50,50);
console.log("The addition of 2 no. is : ",result2);

//functions with optional args
function printMessage(what = "javascript tutorial", howMany = 5) {
    for (let index = 0; index < howMany; index++) {
       console.log(what);
    }
}

printMessage();
console.log("===============");

printMessage("testers talk",2);
console.log("===============");


function addNumbers() {
    var total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total = total + arguments[index];
    }
    return total;
}

var testResult1 = addNumbers(10,20);
console.log("Addition of 2 no. is : ",testResult1);

var testResult2 = addNumbers(10,20,10,20);
console.log("Addition of 4 no. is : ",testResult2);

var testResult3 = addNumbers(10,20,10,20,10);
console.log("Addition of 5 no. is : ",testResult3);
