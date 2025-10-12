let Rabbit = {
    black : 'white',
    orange : 'red',
    func1 : function(line){
        return console.log( `${this.black} say ${line}`);
    }
}

Rabbit.func2 = function(line){
    return console.log(` ${this.orange} say ${line}`);
}

Rabbit.func2('Another brick in the wall');

function Kangaroo(type){
    this.type = type;
}

Kangaroo.prototype.activity = function(action){
    return console.log(`The ${this.type} kangaroo is ${action}`);
}

let brownSkippy =  new Kangaroo('Brown');

brownSkippy.activity('hopping');