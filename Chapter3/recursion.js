let variable1 = 88;
let variable2;
console.log(variable2||variable1);

function findSolutions(target){
    function find(value,history){
        if(value == target){
            return history;
        }
        else if(value > target){
            return null;
        }
        else{
            return((find(value * 3,`${history} * 3`)) || (find(value + 5,`${history} + 5`)))
        }
    }
    return find(1, "1");
}
console.log(findSolutions(24));