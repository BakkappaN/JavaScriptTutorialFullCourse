let mySet = new Set();

mySet.add("javascript");
mySet.add("testers talk");
mySet.add(true);
mySet.add(200);

console.log("Total size of set is : ",mySet.size);

console.log("Is element present ? :",mySet.has("test"));

console.log("=====================");
// for each loop
mySet.forEach(element => {
    console.log(element);
});

console.log("=====================");
let iterator = mySet.values();
for (const element of iterator) {
    console.log(element);
}

console.log("Is element deleted : ",mySet.delete(200));
console.log(mySet);

console.log("Deleted all the elements : ",mySet.clear());
console.log(mySet);


