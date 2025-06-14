function whenTrue(condition,action){
    let name = "ADITYA";
    if(condition(name)){
        action(name);
    }
    else{
        console.log("Opss somethings went wrong");
    }
}

whenTrue((name)=>{if(name === "ADITYA"){
    return true;
}
else{
    return false;
}},(name)=>{
    console.log("WELCOME ALMIGHTY " , name);
});