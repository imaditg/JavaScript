class VEC{
    constructor(x1,y1){
        this.x1 = x1;
        this.y1 = y1;
    }

    get length(){
        let x = this.x1 * this.x1;
        let y = this.y1 * this.y1;
        let dist = x + y;
        return {'Distance' : Math.sqrt(dist)};
    }
}

VEC.prototype.sum = function(x2,y2){
    let x3,y3;
    x3 = this.x1 + x2;
    y3 = this.y1 + y2;

    return {'x' : x3, 'y' : y3};
}

VEC.prototype.sub = function(x2,y2){
    let x3,y3;
    x3 = this.x1 - x2;
    y3 = this.y1 - y2;

    return {'x' : x3, 'y' : y3};
}


let val1 = new VEC(3,1);

 console.log(val1.sum(3,1));

 console.log(val1.sub(5,6));

 console.log(val1.length);

