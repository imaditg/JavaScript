const fun1 = () =>{
    let str1 = 12
    console.log(`${str1}`);
    fun2(str1);
}

const fun2 = (str1) =>{
    let str2 = `${str1 + 12}`
    console.log(str2);
    fun3(str2);
}

const fun3 = (str) =>{
    let str3 = 12,str4;
    console.log(`${str + str3}`);
    str4 = `${str + str3}`;
    fun4(str4);
}

const fun4 = (str) =>{
    let str4 = 88,str5;
    console.log(`${str + str4}`);
    str5 = `${str + str4}`;
    fun5(str5);
}

const fun5 = (str) =>{
    let str1 = 1;
    str = Number(str);
    console.log(`${str + str1}`);
}

fun1();