let dat = /[\d\d.]/;

console.log(dat.test("e"));// dot/period loses it special meaning

console.log(dat.test("."));