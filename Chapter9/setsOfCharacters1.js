console.log(/[0123456789]/.test("1991"));
console.log(/[0123456789]/.test("abc"));
console.log(/[0-9]/.test("1991"));
console.log(/[az]/.test("albus"));
console.log(/[tg]/.test("albus"));//this one will be false
console.log(/[a-z]/.test("albus"));
console.log(/[A-Z]/.test("DUMBLEDORE"));
console.log(/abc/.test("adbrc"));