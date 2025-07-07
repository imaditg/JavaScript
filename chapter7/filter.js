let array = [1,2,"rrr",4,"555"];
array.filter(r => {if (typeof(r) == "string"){
    console.log(r);
}});