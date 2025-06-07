function deepEqual(a,b){
    if(a === b){
        return true;
    }
    if((a == null) || (b == null)){
        return false;
    }
    if((typeof(a) != "object") || (typeof(b) != "object")){
        return false
    }
    let Akeys = Object.keys(a) , Bkeys = Object.keys(b);
    if((Akeys.length) != (Bkeys.length)){
        return false;
    }
    for(let key of Akeys){
        if(!Bkeys.includes(key)){
            return false;
        }
        if(!deepEqual(a[key],b[key])){
            return false;
        }
    }
    return true;
}
let obj1 = {a : 6}, obj2 = {a : 6};

console.log(deepEqual(obj1,obj2));

obj1 = {hello:{is:"anybody"},in:"there",Answer:"no"};
obj2 = {hello:{is:"anybody"},in:"there",Answer:"yes"};

console.log(deepEqual(obj1,obj2));

obj1.Answer = "yes";

console.log(deepEqual(obj1,obj2));

// console.log(obj2.a);