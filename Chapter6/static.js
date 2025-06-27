class STAIIC{
    constructor(val){
        this.val = val;
    }

    twoTimes(){
       return this.val * 2;
    }

    static directinsert(val){
       return new STAIIC(val);
    }
}

let obj = new STAIIC(2);

let obj2 = STAIIC.directinsert(5)

console.log(obj2.twoTimes());