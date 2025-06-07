let list = {};

let arr1 = [1,2,3,4,5,76,7,8,9], arr2 = [];

let start = list,i = 0 ,len = 0;


function insertingList(node,len,i){
    if((len-1) == i){
        node.val = arr1[i];
        node.rest = null;
        return node;
    }
    node.val = arr1[i];
    node.rest = {val:null, rest: null}
    node.rest = insertingList(node.rest,len,++i);
    return node;
}

function retrievingData(node,arr ){
    if(node.rest == null){
        arr.push(node.val);
        return arr;
    }
    console.log(node.val);
    arr.push(node.val);
    retrievingData(node.rest,arr);
    return arr;
}

start = insertingList(start,arr1.length,0);

arr2 = retrievingData(start,arr2);

console.log(arr2);

// console.log(start);