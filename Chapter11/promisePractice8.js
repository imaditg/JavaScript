// function func1(){
//     return new Promise((resolve,reject) =>{
//     });
// }

// console.log(func1());     //output is promise pending


// function func1(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             function func2(){
//                 return new Promise(()=>{
//                     setTimeout(()=>{
//                         function func3(){
//                             return new Promise(() =>{
//                                 setTimeout(()=>{
//                                     resolve(`Done`);
//                                 },3000);
//                             });
//                         }
//                         func3();
//                     },3000);
//                 });
//             }
//             func2();
//         },2000)
//     });
// }

// func1().then((msg) =>{console.log(msg)});

//Even though above cascade function only give end result as an resolve and give reject or do not throw an exception but still it can qualify as a 'Call-Back Hell'



function func1(callback1){
    setTimeout(()=>{
        callback1()
    },3000);
}

function func2(callback1){
    setTimeout(()=>{
        callback1()
    },3000);
}

function func3(){
    setTimeout(()=>{
        console.log(`Sorry`);
    },3000);
}

func1(()=> { func2(() =>{ func3()})});

//Above is 'Call-back Hell' without using a promise 