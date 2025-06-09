const additions = (...numbers) =>{
    let maxNumber = -Infinity;
    for(let number of numbers){
        if(number > maxNumber){
            maxNumber = number;
        }
    }
    return maxNumber;
}

console.log(additions(9,2,3,7,5,0));

console.log(additions(-5,3,7,8,9));

let b = ["Wayne","is","a"];
let a = ["Bruce",...b, "Batmen"];

console.log(a);

let hello = { a: "James", B: "Bond"};

let bye = {B: "casino", c: "007"};

Object.assign(hello,bye);

console.log(hello);