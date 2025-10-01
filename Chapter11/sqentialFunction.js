let title = "Paul Leto Atreides";

// let p = name.split(/\s/);

// console.log(p);

console.log("Checking whether full name has been enter or not");

input = title.split(/\s/);

function fun1(){
    return new Promise((resolve,reject) =>{
        if(input.length == 3)
        {
            setTimeout(()=>resolve("yes"),2000);
        }
        else{
            reject("no");
        }
    })
}

function fun2(){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(input[0]),3000);
    })
}

function fun3(){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(input[1]),4000);
    })
}

function fun4(){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve(input[2])},5000);
    })
}
fun1().then(console.log).then(fun2().then(console.log)).then(fun3().then(console.log)).then(fun4().then(console.log));

