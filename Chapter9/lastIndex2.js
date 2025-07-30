let regx = new RegExp("a","g");// Common regular expression for three strings

let str1 = "abc";

let str2 = "bac";

let str3 = "abc";

console.log(regx.exec(str1));

console.log(regx.exec(str2));

console.log(regx.exec(str3));