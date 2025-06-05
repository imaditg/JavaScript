let range = (start,end) =>{
    let i = null,arr = [null],j= null;
    for(i = start,j = 0 ; i <= end ; ++i ,++j){
        arr[j] = i;
    }
    return arr;
};

let arr = [null];

arr = range(1,10);

console.log(arr);

const sum = (arr) =>{
    let sumation = 0;
    for(let num of arr){
         sumation += num;
    }
    return sumation;
};

console.log("The sum of number is : " + sum(arr));

range = (start,end,steps) =>{
    let i = 0,arr = [null],j = 0;
    if(start < end){
        for(i = start, j = 0; i <= end ; i += steps, ++j){
            arr[j] = i; 
        }
    }
    else{
        for(i = start, j = 0 ; i >= end ; i += steps, ++j){
            arr[j] = i;
        }
    }
    return arr;
};

arr = range(10,1,-2);

console.log(arr);

arr = range(1,10,2);

console.log(arr);