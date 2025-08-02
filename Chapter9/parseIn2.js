
function parseINI(string) {
    let result;
    let section = {};
    let subSection = false;
    let match;
    let current = null;
    result = section;
    let val1 = [null];
    let val2 = [null];
    let i = 0;
    for (let lines of string.split(/\r?\n/)) {
        if (test = lines.match(/^(\w+)=(.*)$/)) {
            match = /^(\w+)=(.*)$/.exec(lines);
            if (subSection == false) {
                section[match[1]] = match[2];
            }
            else {
                val1[i] = match[1];
                section[current][val1[i]] = match[2];
                ++i;
            }

        }
        else if ((match = lines.match(/^\[(.+)\]$/))) {
            section[match[1]] = {};
            current = match[1];
            subSection = true;
            i = 0;
            val1 = [null];
            val2 = [null];
        }
    }
    return result;
}
let iii = parseINI(`James=214potter
[Family]
lilly=potter
harry=potter
[Friends]
hermione=granger
ronald=wesley`);

console.log(iii);