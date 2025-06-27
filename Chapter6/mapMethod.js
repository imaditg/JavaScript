//Old map method with initialising with null

let array = []

console.log("toString" in array);

array = Object.create(null);

console.log("toString" in array);

array = [1,2,3,4,5,6,7,8,9,10];



function map(arr,action){
    let mapped = []
    for(let element of arr){
        if(action(element)){
            mapped.push(element);
        }
    }
    return mapped;
}

let outputArray = map(array,(i) => {
    if(i % 2 == 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(outputArray);