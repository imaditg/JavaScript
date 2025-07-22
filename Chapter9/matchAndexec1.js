let words = "Our solar system has 1 sun";

console.log(words.match(/\d/));

words = /\d/.exec("our solar system has only 1 sun");

console.log(words);

words = /([\d])/.exec("our solar system has [2] sun");

console.log(words);

let qt = /([^']*)/;

console.log(qt.exec("hello dear 'Friend'"));

let don = /`([^`]*)`/;

console.log(don.exec("Donald trump is my `best` friends"));

let word1 = "I am bad";

console.log(/bad(ly)?/.exec(word1));

let numb = 1234;

console.log(/(\d+)/.exec(numb));

console.log(/(\d)+/.exec(numb));

console.log(/(?:na)+/.exec("banana"));

console.log(/(?:na+)/.exec("banana"));