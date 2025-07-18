let re1 = /abc/;

console.log(/acb/.test(re1));

console.log(/abc/.test("abcde"));

console.log(/abc/.test("abxcde"));