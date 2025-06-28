class TEMPERATURE{
    constructor(cel){
        this.cel = cel;
        // console.log(temp);
    }
    
    get fahrenheit(){
        return ((this.cel * 1.8) + 32);
    }

    set fahrenheit( val){
        this.cel = (((val) - 32)/1.8);
    }

    static FromFahrenheit(val){
        return new TEMPERATURE(val);
    }
}

let temp1 = new TEMPERATURE(22);

console.log(`The temperature in celsius ${temp1.cel} and temperature in fahrenheit is ${temp1.fahrenheit} `);

temp1.fahrenheit = 71.6;

console.log(`The temperature in celsius is ${temp1.cel}`);

