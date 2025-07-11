function test(aa){
    this.aa = aa;
}

let handle = test("Hermione");

console.log(aa); //considering as global scope

function test1(ab){
    "use strict";
    this.ab = ab;
}

// let handle1 = test1("hermione");

// console.log(ab);

// console.log(handle1); this will throw an error because we have not assign instance using 'new' keyword. 

let handle1 = new test1("Hermione"); //new keyword is been used

//console.log(ab); this will throw an error because we are calling bidding outside its scope

console.log(handle1);