//Here output is true if every elements pass the test
function customEvery(array,testFn){
    let len = array.length;
    let i = 0;
 if(testFn(len,array)){
    return true;
 }
 else{
    return false;
 }
    
}

console.log(customEvery([2,4,6,8],(len,array)=>{
    for(i = 0 ; i < len ; ++i){
        if((array[i] % 2) != 0 ){
            return false
        }
    }
    return true;
}));

