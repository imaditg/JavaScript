let stocks = `1 Lemon, 2 Tommatos and 4 LadyFingers`;

function minusOne(match,unit,stock){
    unit = Number(unit) - 1;

    if(unit == 0){
        unit = 'No';
    }
    else if(unit == 1){
        stock = stock.slice(0, stock.length - 1);
    }

    return unit + " " + stock;
}

console.log(stocks.replace(/(\d+) (\p{L}+)/gu,minusOne));