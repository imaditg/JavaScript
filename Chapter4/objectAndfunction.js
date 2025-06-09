let obj = {
    hello:"bye"
};

console.log(obj.hello); //bye

console.log(obj.bye);//undefined

obj.bye = "hello again";

console.log(obj.bye); //hello again

console.log(obj["shal low"]); //undefined

obj["shal low"] = [1,2,3,4];

console.log(obj["shal low"]);//[1,2,3,4]

console.log(obj["shal low"][2]);//3

console.log("shal low" in obj); //true

let User = n => n * n; //single statement we can skip return statement

console.log(User(2));//4

User = n => {n * n;
n - 3;}

console.log(User(2));// undefine because return statement is not mentioned

User = () => 4*4;

console.log(User());//16

User = () => {hello: "bye"};

console.log(User()); //it will not work because curly braces treat as a block not a function

User = () =>({hello : "bye"});

console.log(User());// it will work

User = () =>{
    hello : "bye";
    return 88;
}; // here putting parentheses around curly braces does not required because we have mentioned return statement,

console.log(User());// 88

