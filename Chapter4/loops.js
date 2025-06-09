let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.includes(10));//false

for(let i of arr){
    console.log(i);
}

arr.push(10);

console.log(arr.includes(10));//true

for(let i of arr){
    if (i == 5){
        i = 15;
    }// it will not work because '5 = 15'
}

console.log(arr);