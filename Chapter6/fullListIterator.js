class list{
    constructor(value,rest){
        this.value = value;
        this.rest = rest;
    }

    static insertElement(array){
        let next = null;
        for(let i = array.length - 1; i >= 0 ; --i){
            next = new this(array[i],next);
        }
        return next;
    }

    [Symbol.iterator](){
        return new iterator(this);
    }
}

class iterator{
    constructor(list){
        this.list = list;
    }
    next(){
        if(this.list == null){
            return { done : true };
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return{  value, done : false };
    }
}

let arr1 = [1,2,3,4,5,6,7,8,9,0];
let arr2;

arr2 = new list();

arr2 = list.insertElement(arr1);

console.log(arr2);

for(let element of arr2){
    console.log(element);
}