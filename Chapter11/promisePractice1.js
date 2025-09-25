// setTimeout(() => {console.log("hello")},5000);
// let temp;
// function test(temp){
//     setTimeout(()=>{
//         return temp = "hello";
//     },2000);
// }
//  test();

//  console.log(temp);

//  function test1(temp){
//     setTimeout(()=>{
//         temp = "ciao";
//         return console.log(temp);
//     },3000);
//  }

//  test1();

//  function test2(func1){
//     setTimeout(()=>{
//         temp = "ardios"; //Here we are performing side effect
//         return func1(temp);
//     },3000);
//  }

//  test2(console.log);

function test3(callBack) {
    setTimeout(() => {
        console.log("Finished");
        setTimeout(() => {
            let aaa = callBack;
            console.log(aaa);
        }, 9000);
    }, 5000);
}

function test4() {
    setTimeout(() => {
        console.log(`data has been received`);
        // return "123"; setTimeout function never return anything
    }, 4000);
    return "123";
}

test3(test4(console.log("Summer")));