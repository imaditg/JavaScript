class LIST{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }

    static fromList(array){
        let rest = null;
        for(let i = array.length - 1; i >=0 ; --i){
            rest = new this(array[i], rest);
        }
        return rest;
    }

    get valueOfList(){
        let array = []
       let node = this;
       while(node.next){
        array.push(node.val);
        node = node.next;
       }
       return array;
    }

    get totalElementsInArray(){
        let node = this;
        let i = 0;
        while(node.next){
            ++i;
            node = node.next;
        }
        return i;
    }
}

let array1 = [1,2,3,4,5,6,7,8,9,0];
let array2 = new LIST();
let array3;
let totalLength;

array2 = LIST.fromList(array1);

console.log(array2);

array3 = array2.valueOfList;

console.log(array3);

console.log(...array3);

totalLength = array2.totalElementsInArray;

console.log(`Total elements in an array is ${totalLength}`);
