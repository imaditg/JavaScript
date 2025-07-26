let str = "123 /* adfdf123 */ + /* adfsfd123 */ 456";

console.log(str.replace(/\/\*[^]*\*\//g," "));

console.log(str.replace(/\/\*[^]*?\*\//g," "));