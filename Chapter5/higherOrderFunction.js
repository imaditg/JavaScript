//Function creating new functions using closure

let greaterThan = (n) =>{
  return(  m => m > n);
} ;

//let greaterThan = n => m => m > n ; we can also write like this.


let greaterThan10 = greaterThan(10);// we have used closure here


console.log(greaterThan10(20));

let changeMathFunction = (f) =>{
    return ((...args) =>{
        console.log("Total arguments are : ",args);

        let result = f(...args);

        console.log("we have used function " + f + " and result is : ",result);
        return (result);
    });
}

let maxNumberis = changeMathFunction(Math.max);

console.log(maxNumberis(3,2,1,4));


let minNumberis = changeMathFunction(Math.min);

console.log(minNumberis(3,2,1,4));
