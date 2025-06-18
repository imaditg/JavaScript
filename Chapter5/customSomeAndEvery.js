function customEvery(array,action){
    for(let element of array){
        if(action(element)){
            return false;
        }
    }
    return true;
}

function customSome(array,action){
    for(let element of array){
        if(action(element)){
            return true;
        }
    }
    return false;
}

let age1 = [18,20,26,36,28,32],age2 = [28,35,64,84,4,26],age3 = [2,5,9,6,4,11,12,14,16];
let check ;

check = customEvery(age1,(i) => {return (i < 18)});// are everyone is greater then 18

console.log(check);

check = customEvery(age2,(i) =>{return (i < 18)});
console.log(check);

check = customSome(age2,(i) =>{return (i < 18)});

console.log(check);