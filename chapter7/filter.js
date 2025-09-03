let array = [1,2,"rrr",4,"555"];
array.filter(r => {if (typeof(r) == "string"){
    console.log(r);
}});
console.log(...array);
array = array.filter(r => typeof(r) == "string");

console.log(...array);

array = [1,2,"rrr",4,"555"];

console.log(...array);

function custom_fil(arr,fun){
    let arr1 = [];
    for(let numb of arr){
        if(fun(numb)){
            arr1.push(numb);
        }
    }
    return arr1;
}
array = custom_fil(array,(r)=>typeof(r) == "string");

console.log(...array);