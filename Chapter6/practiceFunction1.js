const dude = {
    name :"Magnus",
    age:"34"
};

console.log('name' in dude);
console.log('age' in dude);
console.log("job" in dude);
console.log('toString' in dude);

const myBrothers = ["ben",`sam`];

console.log(Object.getOwnPropertyDescriptors(myBrothers));
console.log(Object.getPrototypeOf(myBrothers));
console.log(Object.getOwnPropertyNames(myBrothers));

const name = "Sina"

console.log(Object.getPrototypeOf(name));

const numb = 125;

const p = Object.getPrototypeOf(numb);

console.log(Object.getPrototypeOf(p));

const human = {
    kind : "Human"
}

const sina = Object.create(human);

console.log(sina);

console.log(Object.getPrototypeOf(sina));

console.log(Object.getPrototypeOf(Object.getPrototypeOf(sina)));

