let result;

class MultiplicatorUnitFailure extends Error{}
const primitiveMultiply = (a,b)=>{
    let chances = Math.random();
    if(chances < 0.20){
         return a*b;
    }
    else{
         throw new MultiplicatorUnitFailure('MultiplicatorUnitFailure');
    }
}

try{
    for(;;){
    result = primitiveMultiply(Math.random()*10,Math.random()*10);
    break;
    }
}
catch(error){
    if(error instanceof MultiplicatorUnitFailure){
   return console.log(' ' + error);
    }
}
console.log(result)