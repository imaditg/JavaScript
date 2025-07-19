//using an braces

let dat = /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}\w{2}/;// can not add /. instead of '-' or ':'

console.log(dat.test("10-06-1998 22:00pm"));