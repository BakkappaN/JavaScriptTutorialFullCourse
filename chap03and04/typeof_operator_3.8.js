var word = "welcome to javascript course";
console.log(typeof word);

var number1 = 100;
console.log(typeof number1);

var isButtonClicked = true ;
console.log(typeof isButtonClicked);

var emptyObj = {};
console.log(typeof emptyObj);

if(typeof word === 'boolean'){
    console.log(word.substring(0,7));
}

if(typeof word === 'string' 
&& word.includes("test")){
    console.log("String has a substring!!");
}


