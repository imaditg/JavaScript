let resultArray = [];
let i = 0;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function customFilter(array, testFn) {
    let len = array.length;
    if (i < len) {
        if (result = testFn()) {
            resultArray.push(array[i]);
        }
        ++i;
        customFilter(array, testFn);
    }
};

customFilter(array, () => {
    return array[i] % 2 == 0;
});

console.log(resultArray);