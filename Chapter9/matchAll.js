let regx = new RegExp("\d+","g");

let str = "I have 6 eggs and 4 carrots 5 fried baccons 7 zucchini and 9 tommotoes"

let matches = str.matchAll(regx);

for(let match of matches){
    console.log("value " + match[0] + "at " + match.index);
}