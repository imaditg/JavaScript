const account = {
    amar : 1000,
    akbar : 2000,
    anthony : 4000,
};
let transf;

function getD(name,amount){
    let ded = name;
    if(!(Object.hasOwn(account,ded))){
        throw new Error(`No ${ded} account has been found`);
    }
    if(account[ded] < amount){
        console.log("Insufficient balance");
    }
    else{
        account[ded] -= amount;
    }
    return amount;
}

try{
  transf =  getD('amar',500);
}
catch(error){
    console.log("oops : " + error);
}

let getB = (name) =>{
    let ben = name;
    if(!(Object.hasOwn(account,ben))){
        throw new Error(`Beneficiar account ${ben} has not been found`);
    }
    else{
        account[ben] += transf;
    }
}

try{
    getB('anthony');
}
catch(error){
    console.log(`${error} and ${transf} amount has been lost`);
}

console.log(account);