let first = new Promise(resolve => resolve(10));

first.then(num => num * 4).then(num => num + 5).then(num => console.log(num));

let second = new Promise(resolve => resolve(`Javascript`));

second.then(str => str + ` is`).then(str => str + ` not`).then(str => str + ` related to java`).then(str => console.log(str));

let third = new Promise((resolve, reject) => reject(`Something went wrong`));

third.catch(error => console.log(error));

let fourth = new Promise((resolve, reject) => setTimeout(() => {
    reject('Timeout');
}, 2000));

fourth.catch(error => console.log(error));

let randomNumber = new Promise((resolve, reject) => {
    let number = Math.random();
    if (number > 0.5) {
        resolve(number);
    }
    else {
        reject(number);
    }
})

randomNumber.then(msg => console.log(`${msg} is greater then 0.5`)).catch(error => console.log(`${error} is smaller then 0.5`));

let chain = new Promise((resolve) => resolve(`start`));

chain.then(msg => {
    console.log(msg);
    throw `Ooops! something went wrong` ;
}).catch(msg1 => console.log(msg1));