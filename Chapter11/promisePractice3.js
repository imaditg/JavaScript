// function counting(nu){
//     let array = [];
//     for(let i = 0 ; i < nu ; ++i){
//         array.push(i);
//     }
//     return array;
// }

// function prm(fn){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let y = fn(10);
//             if(y[9] == 8)
//             {
//             resolve(fn(10));
//             }
//             else{
//                 reject(fn(9));
//             }

//         },4000)
//     });
// }

// prm(counting).then(console.log).catch(console.log);

function withTimeout(promise, time) {
    return new Promise((resolve, reject) => {
        promise.then(resolve, reject);
        setTimeout(() => reject("Timed out"), time);
    });
}

// withTimeout(fn2,2000)

// const slow = new Promise(resolve => setTimeout(() => resolve("done"), 3000))

// slow.then(console.log).catch(console.error);

// withTimeout(slow, 1000).then(console.log).catch(console.error);

function crackPasscode(networkID) {
    function nextDigit(code, digit) {
        let newCode = code + digit;
        return withTimeout(joinWifi(networkID, newCode), 50).then(() => newCode).catch(failure => {
            if (failure == "Time out") {
                return nextDigit(newCode, 0);
            }
            else if (digit < 9) {
                return nextDigit(code, digit + 1);
            }
            else {
                throw failure;
            }
        });
    }
    return nextDigit("",0);
}

crackPasscode("HANGAR 2").then(console.log);