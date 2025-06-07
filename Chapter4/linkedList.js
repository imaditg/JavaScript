let list = {
    val: null,
    rest: null,
};

let arr = [1, 2, 3, 4,9,8,5],outputArr = [null],numb;

const creatingLinkedlist = (list, arr) => {
    let i = 0;
   let start = list;
   for( i = 0,node = start ; i < arr.length ;++i ){
    node.val = arr[i];
    if(i == (arr.length - 1)){
        node.rest = null;
    }
    else{
        node.rest = {val : null, rest : null};
        node = node.rest;
    }
   }
   return start;
};

const listToArray = (outputArr,list) =>{
    let i = 0,node = null;
    for(node = list ; node.rest != null ; ++i,node = node.rest){
        outputArr[i] = node.val;
        if(node.rest.rest == null){
            outputArr[++i] = node.rest.val;  ;
        }
    }
    return outputArr;
};

const prepend = (n = null,list) =>{
    n = Number(n);
    if((n == null) || (n == NaN)){
        console.log("No number is inserted");
        return list;
    }
    else{
        let node ={val : n, rest : list};
        list = node;
    }
    return list;
};

const findNth = (n = null,list) =>{
    n = Number(n);
    if((n == null) || (n == NaN)){
        console.log("Incorrect entery");
    }
    else{
        let i = 0,node = null;
        for(i = 0,node = list; node.rest != null ; node = node.rest , ++i )
        {
            if(i == (n-1)){
                return (node.val);
            }
            else if((node.rest.rest == null)){
                if((i + 2) == n){
                    return (node.rest.val);
                }
            }
        }
        return undefined;
    }
}

list = creatingLinkedlist(list,arr);

outputArr = listToArray(outputArr,list);

list = prepend(14,list);

console.log(outputArr);

outputArr = listToArray(outputArr,list);

console.log(outputArr);

numb = findNth(8,list);

console.log("the number given position is : " + numb);