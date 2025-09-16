let a;

a = /\d+(aa)?/.exec("123aa");

console.log(a);

console.log(/\d+(aa)?/.test("123aaaaa"));

console.log("abc".replace(/a|b|c/g,'d'));