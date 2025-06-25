class Rabbit{
    constructor(type,run,nature){
        this.type = type,
        this.run = run,
        this.nature = nature
    }
    speak(){
        let lines;
        lines = `the ${this.type} of rabbit is run ${this.run} and nature is ${this.nature}`;
        return lines;
    }
}

let whiteRabbit = new Rabbit("White color","Very fast","clam");

console.log(whiteRabbit.speak());