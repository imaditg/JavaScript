let finder = {
    find(array){
        array.some(v => {console.log("here ",v);
            v == console.log(this.value)});
        return array.some(v => v == this.value);
    },
    value: 5
};

console.log(finder.find([1,2,3,5]));