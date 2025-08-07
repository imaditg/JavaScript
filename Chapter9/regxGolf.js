let pattern1 = new RegExp('ca[rt]','ui');

console.log("1) " + pattern1.test( "my cat is a feline and my car is an automobile"));

let pattern2 = new RegExp('pr?op','ui');

console.log("2) " + pattern2.test("The prop is about to pop"));

let pattern3 = new RegExp('ferr(er|y|ari)','u');

console.log("3) " + pattern3.test("ferrari"));
console.log("3a) " + pattern3.test("ferrsh"));

let pattern4 = new RegExp('ious($|\\P{L})','u');

console.log("4) " +  pattern4.test("delicious"));

console.log("4a) " + pattern4.test("obiously"));


let pattern5 = new RegExp('^\\s[.,:]$','u');

console.log("5) " + pattern5.test(" :"));
console.log("5a) " + pattern5.test(" |"));
console.log("5b) " + pattern5.test(":"));
console.log("5c) " + pattern5.test("aa :"));
console.log("5d) " + pattern5.test(" ,"));
console.log("5e) " + pattern5.test(" ."));
console.log("5f) " + pattern5.test(" "));
console.log("5g) " + pattern5.test(" ?/"));
console.log("5h) " + pattern5.test(" .,:"));

let pattern6 = new RegExp('\\p{L}{6,}','u');
console.log("6) " + pattern6.test("abcde"));
console.log("6a) " + pattern6.test("abcdef"));

let pattern7 = new RegExp('(^|\\s)(\\p{L}[^(e|E)]+(\\s|$))','u');
console.log("7) " + pattern7.test("abcd"));
console.log("7a) " + pattern7.test("abcde"));
console.log("7b) " + pattern7.test("abEddkk"));
console.log("7c) " + pattern7.test("abcdfgi"));