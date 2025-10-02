let hundred1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(100);
    },1000);
});

hundred1.then((msg) => {
    console.log(msg);
    return msg;
}).then((msg) =>{
    let msg1 = 2 * msg;
    console.log(msg1);
    return msg1;
}).then((msg1) =>{
    let msg2 = msg1 + 50;
    return msg2;
}).then((msg3) =>{
    console.log(msg3);
});

let hundred2 = new Promise((resolve,reject) => setTimeout(()=>{
    resolve(1000);
},1000));

hundred2.then(num => num).then(num => 2*num).then(num => num + 500).then(num => console.log(num));

let invalid = new Promise((resolve,reject)=>{
    reject(`Invalid Data`);
});

invalid.catch((error)=>{
    console.log(error);
});

let random1 = new Promise((resolve,reject) =>{
    let select = Math.floor((Math.random() * 100));
    if(select > 50){
        resolve(`Success`);
    }
    else{
        reject(`Error`);
    }
});
random1.then((msg) =>{console.log(msg)}).catch((error) => {console.log(error)});

let steps = new Promise((resolve,reject)=>{
    resolve(100);
});

steps.then((value) => {
    console.log(value);
    return value;
}).then((value) => {
    console.log(value);
    throw 'Something went terribly wrong';
}).catch((error) =>{
    console.log(error);
})


let loaded = new Promise((resolve) => {
    console.log(`Loading...`);
    setTimeout(()=>{
        console.log(`Data Loaded`);
        resolve(`Success`);
    },8000);
});

loaded.then((value)=> console.log(value));