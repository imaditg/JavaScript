//random("Heaven"); Can not access before declaration
let random = function(x){
    console.log(x);
}

let another = random;
another("Paradise");