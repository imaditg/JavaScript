let name1 = /\s+/;

console.log(name1.test("     "));

let name2 = new RegExp("\\s+");

console.log(name2.test("    "));