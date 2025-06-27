class SETTER{
    
    constructor(numb){
        this.numb = numb;
    }

    oneTimes(){
        return this.numb;
    }

    set twoTimes(num){
        this.numb = num * 2;
    }
}

let obj = new SETTER(2);

console.log(obj.oneTimes());

obj.twoTimes = 5;

console.log(obj.oneTimes());