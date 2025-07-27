let name1 = "dea+hl[]rd";

let escap = name1.replace(/[\\[.+*()?[{}|$^]/g,"\\$&");

let regx = new RegExp("(^|\\s)" + escap + "(\\s\\w+|$)","gi");

console.log(regx.test("dea+hl[]rd is sitting on the buffalow"));