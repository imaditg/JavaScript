//1
function greetings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello async`);
        }, 2000);
    });
}

// let solution = await greetings();

// console.log(solution);   //SyntaxError: await is only valid in async functions and the top level bodies of modules

async function solution(fn1) {
    let sol = await greetings();
    fn1(sol);
}

solution(console.log);

//2

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function sayolo(speak) {
    await delay(2000);
    return speak;
}

sayolo(`howdy buddy`).then(console.log);

// 3

function getName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Alice`)
        }, 1000);
    })
}

function getAge() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(25);
        }, 2000);
    });
}

async function getUser() {
    let nam = await getName();
    let age = await getAge();
    console.log({ name: nam, age: age });
}

// console.log(getUser()); this statment gives promise as pending
getUser();


// 4
async function getUser1() {
    let nam = await getName();
    let age = await getAge();
    return { name: nam, age: age };
}

getUser1().then(console.log);


// 5

let shouldFail = new Promise((resolve, reject) => {
    setTimeout(() => {
        let random = Math.random() * 10;
        if (random > 5) {
            resolve(`Success`);
        }
        else {
            reject(`Failed`);
        }
    }, 1000);
})

async function getData() {
    try {
        await shouldFail;
        return (shouldFail);
    }
    catch (error) {
        return (error);
    }
}

getData().then(console.log);

// 6

async function getData1(shouldFail) {
    try {
        if (shouldFail) {
            throw new Error(`Failed`);
        }
        else{
           await new Promise(() =>{
                setTimeout(()=>{
                    console.log(`Success`);
                },1000);
            });
        }
    }
    catch(e){
        console.log(`Error handled ${e}`);
    }

}

getData1(false);

// 7

//Using Recursive which do not required an async and await
let givenArray = [`A`,`B`,`C`];

function printLetters(i){
    let len = givenArray.length;
    new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(givenArray[i]);
            resolve(++i);
            if(i < len){
                printLetters(i);
            }
        },1000);
    })
}

printLetters(0);

//8

async function printLetter1(){
    let givenArray = [`A`,`B`,`C`],i,len;
    len = givenArray.length;
    for(i = 0 ; i < len ; ++i ){
        await new Promise((resolve)=>{
            setTimeout(() =>{
                console.log(givenArray[i]);
                resolve(i);                
            },1000);
        });
    }
}

printLetter1();

//9

function count(ms){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(true);
        },ms);
    });
}

async function printLetter2(){
    let givenArray = [`A`,`B`,`C`];
    for(let letter of givenArray){
        await count(1000);
        console.log(letter);
    }
}

printLetter2();