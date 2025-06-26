let obj1 = {};

let obj2 = {id : 1};
let obj3 = {id : 2};

obj1[obj2] = "hello";

obj1[obj3] = "bye";

console.log(obj1[obj2]);

console.log(obj1[obj3]);

console.log(obj1);

console.log(Object.keys(obj1));