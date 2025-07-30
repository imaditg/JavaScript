let str = new RegExp("c","g");

str.lastIndex = 1;

console.log(str.lastIndex);

console.log(str.exec("abcd"));

console.log(str.lastIndex); //last index has been updated

console.log(str.source);
