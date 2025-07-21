let words = /\d/.exec("Elephant has a 25 tusk");

console.log(words);

words = /\d*/.exec("Elephant has a 25 tusk");//does not work

console.log(words);

words = /\d+/.exec("Elephant has a 25 tusk");

console.log(words);

console.log(words.index);


console.log("The solar system has 8 planets".match(/\d+/));