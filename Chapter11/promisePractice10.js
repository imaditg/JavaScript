let hi = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Hello`);
    }, 1000);
});

async function hello() {
    let a = await hi;
    console.log(a);
}

hello();

function taskDone() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task Done`);
        }, 2000);
    });
}

async function taskReturn() {
    let a = await taskDone();
    return a;
}
taskReturn().then(console.log);

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`First step 1`);
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Second step 2`);
        }, 1000);
    });
}

async function finishDone() {
    let first = await step1();
    console.log(first);
    let second = await step2();
    console.log(second);
    console.log(`All steps done`);
}

finishDone();

function something() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Rejected`);
        }, 3000);
    });
}

async function somethingError() {
    try {
        let ans = await something();
        console.log(ans);
    }
    catch (e) {
        console.log(`Error : ${e}`);
    }
}

somethingError();

let parallelTask1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`A`);
    }, 1000);
});

let parallelTask2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`B`);
    }, 2000);
});

let parallelTask3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`C`);
    }, 3000);
});

async function parallelAll() {
    Promise.all([parallelTask1, parallelTask2, parallelTask3]).then((data) => { console.log(data) });
}
parallelAll();

function fetching(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n > 2) {
                resolve(`Succeed`);
            }
            else {
                reject(`Retring`);
            }
        }, 3000);
    });
}
async function ansFetching(n) {
    for (; n < 4; ++n) {
        try {
            let ans = await fetching(n);
            console.log(ans);
        }
        catch (e) {
            console.log(e);
        }
    }
}

ansFetching(1);

function readinArray(item,ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(item);
        },ms);
    });
}

async function anArrays(){
    let arr = [`A`,`B`,`C`];
    for(let element of arr){
        let result = await readinArray(element,3000);
        console.log(result);
    }
}
anArrays();