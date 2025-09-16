function require(name){
    if(!(name in require.cache)){
        let code = readFile(name);
        let exports = require.cache[name] = {};
        let wrapper = Function("require , exports",code);
        wrapper(require,exports);
    }
    return require.cache[name];
}

require.cache = Object.create(null);

// let wrapper = Function("a , b", "return a + b");

// console.log(wrapper(5,5));