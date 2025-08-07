let i = 0;
function regxGolf(condition,str){
    let result;
    result = condition.test(`${str}`);
    console.log(`${++i}) ` + result);
}
//1
regxGolf(/(^|.+)(cat)(.+)(car)(.+|$)/,"my cat is feline and my car is automobile");

//1a

regxGolf(/(^|.+)(cat)(.+)(car)(.+|$)/,"my cat is feline and my aeroplane is automobile");

//2

