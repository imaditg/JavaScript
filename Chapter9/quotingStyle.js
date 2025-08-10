let text = "'I'm the cook,' he said, 'it's my job.'";

let reg = new RegExp("(^|\\P{L})'|'(\\P{L}|$)","gu");

text = text.replace(reg,'$1"$2');

console.log(text);