let arr = [1,2,3,4,5,6,7,8,9,10];
function map(arr,action){
    let mapped = [];
    for(let element of arr){
        if((action(element))){
            mapped.push(element);
        }
    }
    return mapped;
}

let input = [];

input = map(arr,(i) => {
    if(i % 2 == 0){
        return true;
    }
})

console.log(input);