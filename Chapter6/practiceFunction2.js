function define(name){
    const object = ()=> {
        return `Hello i am ${name}`;
    }
    return object;
}

let iam = define(`adi`);

console.log(iam());

console.log(Object.getPrototypeOf(iam()));

const sina = Object.create(define("james"));

console.log(Object.getPrototypeOf(sina));

console.dir(sina);