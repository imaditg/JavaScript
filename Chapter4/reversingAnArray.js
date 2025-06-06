let mainArray = [1,2,3,4,5,6,7,8,9,10,11], anotherArray = [null];

const reverseArray = (arr = [null]) =>{
    let i = null,j = null,len = null,tempArray = [];
    len = arr.length;

    for(i = len - 1; i >= 0 ; --i){
        tempArray.push(arr[i]);
    }
    return tempArray;
};

anotherArray = reverseArray(mainArray);

for(let number of anotherArray){
    console.log(number);
}

const reverseArrayInPlace = (arr = [null]) =>{
    let i = null,j = null, len = null,temp = null,mid = null;
    len = arr.length;
    mid = len /2;
    mid = Math.floor(mid);
    for(i = 0,j = len - 1 ; i < mid; ++i,--j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

reverseArrayInPlace(mainArray);

console.log(mainArray);