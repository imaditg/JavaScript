let santa = /hoo+hoo+(hoo+)+/;

console.log(santa.test("hoohoohooooo"));

console.log(santa.test("hoohoohoohoooohooo"));

console.log(santa.test("hoohohoooo"));

console.log(santa.test("HOOHOOHOOOOO"));

santa = /hoo+hoo+(hoo+)+/i;

console.log(santa.test("HOOHOOHOOOOO"));