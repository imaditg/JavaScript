let re1 = /abc/;

console.log(/abc/.test(re1));

console.log(re1);

re1 = /abc\z/;

console.log(re1);

re1 = /abc\n/;

console.log(re1);

re1 = /abc\/abc/;

console.log(re1);

let re2 = new RegExp("abc/");

console.log(re2);

let re3 = new RegExp("abc+");

console.log(re3);

re3 = /abc+/;

console.log(re3);

re3 = /abc+n/;

console.log(re3);

re3 = /A\+/;

console.log(re3);