class Person{
    talk(){
        return `talking`;
    }
}

const me = new Person;
const you = new Person;
console.log(me.talk());
console.log(me);
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(me));
console.dir(Person);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(me)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(me))));

console.log(Object.getPrototypeOf(Person));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Person)));


console.log("hello");
console.log(me.prototype === Person.prototype);
console.log(me.__proto__ === Person.prototype);
console.log(me.__proto__.talk());
console.log(Person.prototype.talk());

Person.prototype.talk = () =>{
    return "yelling";
}

console.log(me.talk());
console.log(you.talk());

me.talk = function(){
        return "Again Talking";
}

console.log(me.talk());
console.log(you.talk());