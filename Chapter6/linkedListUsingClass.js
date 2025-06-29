class LIST{
    constructor(value,rest){
        this.value = value;
        this.rest = rest;
    }

    static fromArray(array){
        let result = null;
        for(let i = array.length - 1; i >= 0 ; --i){
            result = new this(array[i],result);
        }
        return result;
    }
}

let array1 = [1,2,3,4,5,6,7,8,9] , array2 = new LIST();

array2 = LIST.fromArray(array1);

console.log(array2);