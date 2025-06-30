class LIST{
    constructor(value,rest){
        this.value = value;
        this.rest = rest;
    }

    static insertArray(array){
        let next = null;
        for(let i = array.length ; i >= 0 ; --i){
            next = new this(array[i], next);
        }
        return next;
    }

}

class LISTITERATOR{
    constructor(list){
        this.list = list;
    }

    next(){
        if(this.list == null){
            return {done : true};
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return{value , done : false};
    }

}




let array1 = [0,1,2,3,4,5,6,7,8,9];
let array2;

array2 = new LIST();

array2 = LIST.insertArray(array1);

let iter = new LISTITERATOR(array2);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());