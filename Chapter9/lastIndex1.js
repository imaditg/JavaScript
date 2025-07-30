let regx1 = new RegExp("c","g");

let regx2 = new RegExp("c","y");

regx1.lastIndex = 1;

console.log(regx1.exec("abcd"));

console.log(regx1.lastIndex);

regx2.lastIndex = 1;

console.log(regx2.exec("abcd"));

console.log(regx2.lastIndex);

regx2.lastIndex = 2;

console.log(regx2.exec("abcd"))

console.log(regx2.lastIndex);

let sticky = /abc/y;

console.log(sticky.lastIndex);

console.log(sticky.exec("xyz abc"));
