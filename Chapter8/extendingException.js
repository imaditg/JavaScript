let accounts = {
    Harry : 2000,
    James : 3000,
    Lilly : 5000,
};

let transf = {
    nam : null,
    price : null,
    steps : 0,
};

class NameError extends Error{};
class LessAmount extends Error{};
class Incomplete extends Error{};

let dedA = (nam1,amount) =>{
    if(!(Object.hasOwn(accounts,nam1))){
        throw new NameError(`The Enter Name ${nam1} does not exists`);
    }
    else{
        if(accounts[nam1] < amount){
            throw new LessAmount(`The ${accounts[nam1]} does not have sufficient amount`);
        }
        else{
            accounts[nam1] -= amount;
            transf.nam = nam1;
            transf.price = amount;
            ++transf.steps;
        }
        return transf;
    }
}

try{
    transf = dedA('Harry',1000);
}
catch(error){
    console.log("oppss : " + error);
}

let Beni = (nam) =>{
    if(!(Object.hasOwn(accounts,nam))){
        throw new Incomplete(`The Enter Name ${nam} does not exists`);
    }
    else{
        accounts[nam] += transf.price;
        ++transf.stages;
        return transf;
    }
}

try{
    tranf = Beni('James')
}
catch(error){
    console.log("Incomplete Transaction : " + error);
}
finally{
    if(transf.stages == 1){
        accounts[transf.name] += transf.amount;
    }
}
console.log(accounts);