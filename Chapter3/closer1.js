function outer1(factor){
    return number =>
        factor * number;
}

let first = outer1(5);
console.log(first(2)); //this will work as inside statement consider only one statement




let outer2 = (factor) =>{
    return (number) =>{
         (number * factor);
    }
}

let second = outer2(2);
console.log(second(5)); //this wont work as there is no written statement inside inner function




let outer3 = (factor) =>{
    return (number) =>{
        return(number * factor);
    };
};

let third = outer3(2);
console.log(third(2));//now it will work


function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(8);
console.log(wrap1());