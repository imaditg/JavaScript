function counting(numb){
    let array = [];
    for(let i = 0 ,j = 0; i < numb; ++i,++j){
        array[j] = i;
    }
    return array;
}

function func1(nu){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(counting(nu));
        },2000)
    })
};
func1(10).then(console.log);