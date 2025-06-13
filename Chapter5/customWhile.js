let customWhile = (conditionFn,bodyFn) =>{
    if(conditionFn()){
        bodyFn();
        ++counter;
        customWhile(conditionFn,bodyFn);
    }
    else{
        return;
    }
}
let counter = 0;


customWhile(()=>counter < 5,()=>console.log(counter));