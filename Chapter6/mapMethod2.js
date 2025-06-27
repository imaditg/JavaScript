let ages = new Map();

ages.set("Peter",39);

ages.set("Parker",40);

ages.set("Tonny",50);

ages.set("Starck",88);

console.log(ages);

console.log(`Peter age is ${ages.get("Peter")}`);

console.log(`Is mathew age is known ? ${ages.has("Mathew")}`);

console.log(`ages has to string method ? ${ages.has("toString")}`);

console.log(`Object has own : ${Object.hasOwn({x : 1},"x")}`);