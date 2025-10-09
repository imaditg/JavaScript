// function func1(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve(`A`);
//         },1000);
//     });
// }

// function func2(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve(`B`);
//         },2000);
//     });
// }

// function func3(){
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve(`C`);
//         },3000);
//     });
// }

// function func4(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve(`D`);
//         },4000);
//     });
// }

// async function soln(fn){
//     let first = await func1();
//     fn(first);
//     let second = await func2();
//     fn(second);
//     let third = await func3();
//     fn(third);
//     let fourth = await func4();
//     fn(fourth);
// }

// soln(console.log);

// Promise.all([func1(),func2(),func3(),func4()]).then(result => console.log(result));

// let first1 = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve(`First done`);
//     },2000);
// });

// let second1 = new Promise((resolve) =>{
//     setTimeout(() =>{
//         resolve(`Second done`);
//     },3000);
// })
// Promise.race([first1,second1]).then(console.log);

// let ok = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve(`ok`);
//     },3000);
// });

// let networkError = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         reject(`Network error`);
//     },3000);
// });

// Promise.all([ok,networkError]).then((msg) =>{console.log(msg)}).catch((e) =>{console.log(`Caught : ${e}`)});

// let number1 = new Promise((resolve) =>{
//     setTimeout(()=>{
//         resolve(5);
//     },2000);
// });

// number1.then(num => {
//     return num * 3;
// }).then((num) => {
//     if(num > 10){
//         throw `Too Big`;
//     }
//     return num;
// }).then((num) =>{
//     console.log(num);
// }).catch((e) =>{
//     console.log(`Error : ${e}`);
// });

function UnstableFunction1(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n > 1){
                reject(`Retrying`);
            }
            else{
                resolve(`Completed`);
            }
        },2000);
    })
}

function retry(n = 3){
        UnstableFunction1(n).then((data) => {console.log(`Success : ${data}`)}).catch((error) => {
            console.log(`Error : ${error}`);
            --n;
            retry(n);
    });
}
retry(3);