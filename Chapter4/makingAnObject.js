let obj = {
    first:"name"
};
console.log(typeof(obj)); //object

console.log(obj);

console.log(obj.first); // "name"

console.log(typeof(obj.first)); //strings

console.log(obj.first.name); //undefined

console.log(Object.keys(obj)); 

obj = {
    "The name" : "harry"
};

console.log(Object.keys(obj));// "The name"

console.log(obj["The name"]); //Harry

console.log(typeof(obj["The name"])); //strings

obj = {
    "The name" : "harry",
    name : [1,2,3,4,5]
};

console.log(Object.keys(obj));// "The name", "harry"

console.log(obj.name[3]); //4

console.log(typeof(obj.name)); //object

obj = {
    "hello" : "bye",
    school :{
        standard : 5,
        division : "aaa",
        subject : {
            Physics : 50,
            chemistry : 50,
            maths : 50,
            "non subject" : {
                hindi:50,
                gujarati : 50,
                sanskrit : 50,
                "last object": [1,2,3,4,5]
            }
        }
    }
};

console.log(Object.keys(obj)); //"hello", school

console.log(Object.keys(obj.school)); //standard, division, subject 

console.log(Object.keys(obj.school.subject)); //physics,chemistry,maths, non subject

console.log(typeof(obj.school.subject["non subject"]));//object

console.log(obj.school.subject["non subject"]); //{ hindi: 50,gujarati: 50, sanskrit: 50,'last object': [ 1, 2, 3, 4, 5 ]}

console.log(obj.school.subject["non subject"].hindi); //50

console.log(obj.school.subject["non subject"]["last object"]);// [1,2,3,4,5,]

console.log(obj.school.subject["non subject"]["last object"][3]); //4