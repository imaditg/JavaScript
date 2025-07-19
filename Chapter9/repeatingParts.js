let dat1 = /\d+/;

let dat2 = /\d*/;

console.log(dat1.test(123456));

console.log(dat1.test());

console.log(dat2.test(123456));

console.log(dat2.test());