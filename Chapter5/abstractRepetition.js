function repeat(n,action){
    for(i = 0 ; i < n; ++i){
        action(i);
    }
}

repeat(10,console.log);

let labels = [];



// action = (r) =>{
//     labels.push(`${r} units`);
// } this is function
//repeat(5,action); this part is more elaborated ways



repeat(5, (r) => {
    labels.push(`${r} units`);
}); // here we are passing function as a value directly to function



console.log(labels);