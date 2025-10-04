//chaining of function

function todayWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Cloudya`);
        }, 5000);
    })
}

function weatherIcon(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (data) {
                case `Sunny`:
                    resolve(`☀️   ${data}`);
                    break;
                case `Cloudy`:
                    resolve(`☁️  and the chances of 🧆`);
                    break;
                default:
                    reject(`No data has been found`);
                    break;
            }
        }, 2000);
    });
}

function onSuccess(data) {
    return new Promise((resolve) => {
        resolve(console.log(`Success : ${data}`));
    }, 3000);
}

function onFailure(data) {
    return new Promise((reject) => {
        reject(console.log(`Error : ${data}`));
    }, 3000);
}

todayWeather().then(weatherIcon).then(onSuccess,onFailure);