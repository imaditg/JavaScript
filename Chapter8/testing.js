function test(label,body){
    if(!body()) console.log(`Failed : ${label}`);
}

test("Convert Latin text to uppercase",()=>{
    return "hello".toUpperCase()== "HELLO";
});//Result will be nothing that means it true

test("Convert latin text to uppercase",()=>{
    return "hello".toUpperCase() == "hello";
})// result will be false