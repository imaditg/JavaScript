let promise1 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(1);
    },2000);
});

async function first1(){
    let a = await promise1;
    console.log(a);
}

first1();

let promise2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(2);
    },2000);
});

let second1 = async ()=>{
   console.log( await promise2);
};

second1();

let promisea1 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(1);
    },1000);
});

let promisea2 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(2);
    },2000);
});

let promisea3 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(3);
    },3000);
});


let solutiona1 = async () =>{
    await Promise.all([promisea1,promisea2,promisea3]).then(console.log);

};

solutiona1();

let solutiona2 = async() =>{
   let a =  await Promise.all([promisea1,promisea2,promisea3]);
   return a;
}

async function beatIt(){
let y = await solutiona2();
console.log(y);
}

beatIt();

let solutiona3 = async() =>{
    await Promise.all([promisea1,promisea2,promisea3]).then((elements) =>{
        for(let element of elements){
            console.log(element);
        }
    })
}

solutiona3();
