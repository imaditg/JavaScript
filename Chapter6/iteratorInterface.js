let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator); //String Iterator

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());