class LIST{
    constructor(arg,next){
        this.arg = arg;
        this.next = next;
    }

    static fromArray(arr){
        let result = null;
        for(let i = arr.length - 1 ; i >= 0 ; --i ){
            result = new this(arr[i],result);
        }
        return result;
    }

    get totalLength(){
        return 1 + (this.next ? (this.next.totalLength) : 0);
    }
}


let array1 = [0,1,2,3,4,5,6,7,8,9] , array2 = new LIST();

array2 = LIST.fromArray(array1);

console.log(array2);

console.log(`The total length of array is ${array2.totalLength}`);
