let letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("e");
letters.add("f");
letters.add("g");
letters.add("a");//it will does not add it further
letters.add("b");//it will does not add it further
letters.add(123);
letters.add(true);
letters.add(456);
letters.add(true);
letters.add(123);
console.log(letters);

letters.delete(456);

console.log(letters);

letters.add(["John","Wick","Jack","Saprrow"]);

console.log(letters);
