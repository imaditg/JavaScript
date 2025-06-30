class LIST{
    constructor(value,rest){
        this.value = value;
        this.rest = rest;
    }

    static insertValue(array){
        let next = null;
        for(let i = array.length - 1; i >= 0; --i ){
            next = new this(array[i], next);
        }
        return next;
    }
}

class NodeIterator{
    constructor(list){
        this.list = list;
    }

    next(){
        if(this.list == null){
            return { done : true };
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return{ value , done : false};
    }
}

let arr1 = [1,2,3,4,5,6,7,8,9,0];

let arr2 = new LIST();

arr2 = LIST.insertValue(arr1);


LIST.prototype[Symbol.iterator] = function(){
    return new NodeIterator(this);
}

for(let element of arr2){
    console.log(element);
}