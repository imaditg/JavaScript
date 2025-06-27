// function HundredTimes(n){
//     this.n = n;
// }

// HundredTimes.prototype.oneMultiply = function(){
//     return this.n ;
// }

// let obj = new HundredTimes(100);

// console.log(obj.oneMultiply());

// HundredTimes.prototype.get.tenMultiply = function(){
//     return this.n * 10;
// } // GET METHOD DOES NOT WORK HERE

class HundredTimes{
    constructor(n){
        this.n = n;
    }
    oneMultiply(){
        return this.n;
    }
   get twoMultiply(){
        return this.n * 2;
    }
}

let obj = new HundredTimes(100);

console.log(obj.oneMultiply());

console.log(obj.twoMultiply);