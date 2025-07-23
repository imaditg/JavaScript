let word = /\d+\s(pig|cow|sheep)s?/

console.log(word.exec("22 pig"));

console.log(word.exec("22 cows"));