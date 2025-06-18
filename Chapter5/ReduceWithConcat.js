let arrays = [[1,2],[3,4],[5,6],[7,8],[9,10]];

function flattening(arr,action){
    let outputArray = []
    for(let element of arr){
        outputArray = action(outputArray,element);
    }
    return outputArray;
}

console.log(flattening(arrays,(i,j)=>{return i.concat(j)}));