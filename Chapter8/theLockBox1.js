const box = new class{
    locked = true;
    #content = [];

    unlock(){this.locked = false;}
    lock(){this.locked = true;}

    get content(){
        if(this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(action){
    if(box.locked){
        box.unlock();
    }
    try{
       return action();
    }
    finally{
        box.lock();
    }
}

withBoxUnlocked(() =>{
    box.content.push("GOLD BARS");
    console.log(box.content);
})

try{
    if(box.lock){
        withBoxUnlocked(()=>{
             throw new Error("The box is Locked again");
        })
    }
}
catch(error){
    console.log("oppss" + error);
}