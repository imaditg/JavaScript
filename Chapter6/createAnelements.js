function greatings(name){
    const obj = {
        talk(){//shorthands
            console.log(`hello I am  ${name}`);
        }
    }
    console.log(typeof(obj));
    console.log(typeof(obj.talk));
    return obj;
}

ben = greatings('ben');

ben.talk();

console.log(typeof(greatings));

sam = greatings('sam')