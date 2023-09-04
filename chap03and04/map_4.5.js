let myMap = new Map();

myMap.set("one","monday");
myMap.set("two","tuesday");
myMap.set("three","wednesday");
myMap.set("four",100);

console.log("Total size of map is : ",myMap.size);

console.log("Is element present ? :",myMap.has("abc"));

console.log(myMap.get("two"));

console.log("==================");
//print only keys
for (const key of myMap.keys()) {
    console.log(key);
}

console.log("==================");
//print only values
for (const value of myMap.values()) {
    console.log(value);
}

console.log("==================");
// for each
myMap.forEach( (value,key) => {
    console.log(key+":"+value);
});

console.log("==================");
// keys - iterator
for (const key of myMap.keys()) {
    console.log(key+":"+myMap.get(key));
}

console.log("==================");
//entries
for (const [key,value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}

myMap.delete("two");

console.log(myMap);
