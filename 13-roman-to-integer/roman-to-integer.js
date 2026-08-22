/**
 * @param {string} s
 * @return {number}
 */

let romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

let romanException = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
}

var romanToInt = function (s) {
    let splitValue = s.split("")
    let sum = 0
    let skipNext = false;

    for (let i = 0; i < splitValue.length; i++) {

        if (skipNext) {
            skipNext = false;
            continue;
        }

        let currChar = splitValue[i]
        if (i != splitValue.length - 1) {
            const nextChar = splitValue[i + 1]
            const combineChar = `${currChar}${nextChar}`
            if (romanException[combineChar]) {
                sum += romanException[combineChar]
                skipNext = true;
            }
        }

        if (!skipNext) {
            sum += romanValue[currChar]
        }
    }
    return sum
};