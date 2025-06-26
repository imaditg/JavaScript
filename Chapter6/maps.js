let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mp(arr, action) {
    let obj = [];
    for (let element of arr) {
        if (action(element)) {
            console.log(element);
            obj.push(element);
        }
    }
    return obj;
}

let print = mp(number, (i) => {
    if ((i % 2) == 0) {
        return true;
    }
    else {
        false;
    }
});
console.log(print);