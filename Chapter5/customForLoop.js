function customForLoop(value,test,update,body){
for( value ; test(value) ;value = update(value) ){
    
    body(value);
}
}

customForLoop(3, (i) => {return (i >= 0)},(i) =>{return(--i)},(i) =>{return console.log(i)});