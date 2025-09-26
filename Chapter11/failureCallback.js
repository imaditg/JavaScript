let i = 5;//set another value for i to check failureCallback
function multi(m){
    let j = 5 * m;
    return j;
}
function func1(callback){
    setTimeout(() => {
        j = callback(i);
        setTimeout(()=>{
            if(j == 25){
                console.log("true");
            }
            else{
                console.log("false",j);
            }
        },2000)
    }, 3000);
}

func1(multi);