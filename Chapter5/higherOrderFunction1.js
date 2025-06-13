//Function that provide new type of control flow

function repeat(n,action){
    for(i = 0 ; i < n; ++i){
        action(i);
        // console.log(action.toString()); we can watch our call back functions
    }
}

// let arr = []

// repeat(3,(r) => arr.push(r));

// console.log(...arr);

function unless(i,then){
    if(i % 2 == 0){
        then();
    }
}



repeat(5,(i) => {unless(i, () =>{
    console.log(i,"is even" );
})});

["A","B"].forEach(l => console.log(l));



let rp = (n,action) =>{
    for(i = 0 ;  i < n ; ++i){
        action(i);
    }
};

let un = (i,then) =>{
    if(i % 2 == 1){
        then();
    }
};

rp(5,(i) => un(i,() =>{
    console.log(i, " is odd.");
}));