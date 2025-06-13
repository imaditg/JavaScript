function customFilter(array,testFn){
    resultArray = [];
    let len = array.length;
    let i = 0;
    for(i = 0 ; i < len ; ++i)
    {
        if(testFn){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

customFilter([1,2,3,4,5,6,7,8,10,12],() => {return ((array[i] % 2) == 0)});

console.log(resultArray);