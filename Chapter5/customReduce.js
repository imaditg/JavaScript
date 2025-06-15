function customReduce(array,action,start = 0){
    let current = start;
    for(let element of array){
        // console.log(element);
        current = action(current , element);
        
    }
    return current;
}

let arr1 = [1,2,3,4,5];

value = customReduce(arr1,(a,b) => {return a + b});

console.log(value);