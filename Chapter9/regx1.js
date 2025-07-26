console.log(/\/\//.test("//"));

let str = "/**/";
console.log(/\/\*\*\//.test(str));

str = "/*4aggd*/";

console.log(/\/\*\w+\*\//.test(str));