function test(){
    //"use strict" Enabling this will cause strict mode to activate in function
    for(counter = 0 ; counter <= 0 ; ++counter){
        console.log(`Without Strict Mode`);
        console.log(typeof(counter));
    }
    let maker = 0;
}

test();

//since no let or const is declare prior to counter. therefore js system will consider 'counter' as a global bidding

console.log(counter);
