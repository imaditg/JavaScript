// 1

let firstOne = async () => {
    let arr = [1, 2, 3];
    for (let element of arr) {
        let result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Done with ${element}`);
            }, element * 1000);
        });
        console.log(result);
    }
}

firstOne();





let arr = [1, 2, 3];
let allPromise = arr.map((ele) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Done with ${ele} in ${ele * 1000} seconds`);
        }, ele * 1000);
    });
});
async function promiseSolution(){
let result = await Promise.all(allPromise);
console.log(result);
}
promiseSolution();


let allPromise1 = () => {
    function thePromises() {
        return arr.map((i) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`second ${i}`);
                }, i * 1000);
            });
        });
    }
    let asyncFunc = async () => {
        let result = await Promise.all(thePromises());
        console.log(result);
    }
    asyncFunc();
}

allPromise1();


// 2

function logLetterArray() {
    let letters = ['A', 'B', 'C'];
    let resolvePromise = () => {
        return letters.map((l) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`${l}${'✓'}`);
                }, 1000);
            });
        });
    }
    let logging = async () => {
       let result = await Promise.all(resolvePromise());
       console.log(result);
    }
    logging();
}

logLetterArray();


 let letters1 = ['A', 'B', 'C'];
async function logLetterArray1(){
    let result = await Promise.all( 
         letters1.map(async (l) =>{
          return await new Promise((resolve) =>{
                setTimeout(()=>{
                    resolve(`${l} + ${'✓'}`);
                },1000);
            });
        })
    );
    console.log(result);
}

logLetterArray1();

//3

function fetchData(n){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`Data ${n}`);
        },n * 1000);
    });
}

async function loadFetch(){
    let arrays = [1,2,3,4];
    let result = await Promise.all(
        arrays.map(async (n)=>{
           return await fetchData(n);
        })
    );
    console.log(result);
}

loadFetch();

// 4

async function evenRejection() {
    let arrays = [1, 2, 3, 4, 5];
    try {
        let results = await Promise.all(
            arrays.map((i) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if ((i % 2) == 0) {
                            reject(`${i} is even`);
                        }
                        else {
                            resolve(`${i} is odd`);
                        }
                    }, 500);
                })
            })
        )
        console.log(`${results}`);
    }
    catch (e) {
        console.log(`Error ${e}`);
    }
}
evenRejection();

//5

async function fetchings() {
    let urls = ['URL1', 'URL2', 'URL3', 'URL4'];
    function fakeFetching() {
        return urls.map(async (i) => {
            return await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`${i}`);
                }, 1000);
            });
        });
    }

    let results = await Promise.all(fakeFetching());
    console.log(results);
}

fetchings();