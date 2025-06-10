let hello = {hello : "bye", time : 22};
console.log(hello);

console.log(hello.hello);

console.log(hello.time);

console.log(typeof(hello));

let {nam} = {nam: "Harry" , age : 11};

console.log(nam);

console.log(nam.nam);

console.log(nam.age);

console.log(typeof(nam));

const person = {nm : "john", age : 22};

//console.log(nm);//it does not work

const {nm , age} = person;// it is like inititalizing nm = "john", age = 22 (before it was in structure, now it was destructure)

console.log(nm);

console.log(typeof(nm));

console.log(age);

console.log(typeof(age));

//const nm = "hello"; Can not be re initialize

let {Newvar} = {school : "st.joseph" , std : 12};

console.log(Newvar); //undefined   it will not work since bidding name inside object right side is not same.

let {Anothervar} = {Anothervar : "st.phillips" , std : 10};

console.log(Anothervar); // it will work

console.log(Anothervar.std); // std will descarded