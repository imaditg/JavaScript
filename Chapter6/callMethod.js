let arr1 = [1,2,3,4,5];

console.log(Object.prototype.toString.call(arr1));

let person = {
    name: "Clark",
    surname : "Kent",
    placeOfBirth : "Krytonite Planet"
};

let Description = {
    invoke: function(){
        let line;
       line = `The name is ${this.name} and surname is ${this.surname} and place of birth is ${this.placeOfBirth}`;
       return line;
    }
}

console.log(Description.invoke.call(person));
