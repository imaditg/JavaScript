// function getWeather(){
//     return new Promise(function(resolve,reject){})
// }

// const prom = getWeather();

// console.log(prom);
let i = 0;
function callBackhell(callback) {
    setTimeout(() => {
        callback(`callback ${++i} 1st`);
        setTimeout(() => {
            callback(`callback ${++i} 2nd`);
            setTimeout(() => {
                callback(`callback ${++i} 3rd`);
                setTimeout(() => {
                    callback(`callback ${++i} 4th`);
                    setTimeout(() => {
                        callback(`callback ${++i} 5th`);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000)
}

callBackhell(console.log);