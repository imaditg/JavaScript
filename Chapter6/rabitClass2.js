class Parrot{
     fly = false;
     numberOfparrot = 23;
    constructor(color,age,gender){
        this.color = color,
        this.age = age,
        this.gender = gender
    }
    speak(line){
        let lines;
        lines = `The ${this.color} parrot is ${this.gender} in gender and ${this.age} years old and can speak "${line}"`;
        return lines;
    }
}

let redParrot = new Parrot("red","3","Female");

console.log(redParrot.speak("Hallelujah"));

console.log(redParrot.fly);

console.log(redParrot.numberOfparrot);

redParrot.fly = true;

redParrot.numberOfparrot = 33;

console.log(redParrot.fly);

console.log(redParrot.numberOfparrot);

console.log(typeof(redParrot));

console.log(typeof(redParrot.speak));
console.log(typeof(redParrot.speak()));

console.log(typeof(redParrot.fly));

console.log(typeof(redParrot.numberOfparrot));
