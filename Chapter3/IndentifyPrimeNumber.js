let number = null, arr = [], i = null, j = null, len = null, count = 2, divisible = null;

const enterNumber = (number) => {
    if (number == 0) {
        console.log("No number has been added");
    }
    else if (number == 1) {
        console.log("Number is prime number");
    }
    else if (number > 1) {
        arr[0] = 2;
        arr = primes(number, arr);
        return arr;
    }

}

function primes(numb, arr) {
    let current = 2, i = 0, j = 0, len = 0;

    for (i = 2; i <= numb; ++i) {
        len = arr.length;
        for (j = 0; j < len; ++j) {
            if ((i % arr[j] == 0)) {
                break;
            }
        }
        if(j == len){
            arr.push(i);
        }
    }
    return arr;
}

enterNumber(55);

console.log(arr);
