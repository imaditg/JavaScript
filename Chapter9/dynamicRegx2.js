let name1 = "Shaktiman";
let re = new RegExp("(^|\\s)" + name1 + "(\\s\\w+|$)","gi");

console.log(re.test("Shaktiman is Gangadhar"));

console.log(re.test("Spidermen is Gangadhar"));