function parse(string){
    let val1 = null;
    let val2 = null;
    let first = true;
    let state;
    let result = {};
    let current = null;
    state = result;
    let output = null;
    for(let lines of string.split(/\r?\n/)){
        if((/^(\w+)=(.+)$/.test(lines) && (first == true))){
            output = /^(\w+)=(.+)$/.exec(lines);
            val1 = output[1];
            val2 = output[2];
            state[val1] = val2;
        }
        else if(/^\[(.+)\]$/.test(lines)){
            output = /^\[(.+)\]$/.exec(lines);
            state[output[1]] = {};
            current = output[1];
            first = false;
        }
        else if((/^(\w+)=(.+)$/.test(lines) && (first == false))){
            output = /^(\w+)=(.+)$/.exec(lines);
            val1 = output[1];
            val2 = output[2];
            state[current][val1] = val2;
        }
    }
    return result;
}

let ans = parse(`hello=add
bye=123
[helloddd]
tiger=cat
lion=feline
[canine]
dog=friendly
fox=clever`);

console.log(ans);