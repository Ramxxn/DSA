/**
 * @param {string} s
 * @return {number}
 */

const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

// by subtractive notation or subtractive principle in Roman numerals.

var romanToInt = function (s) {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        let current = value[s[i]]
        let next = value[s[i + 1]]

        if (current < next) {
            sum -= current
        } else {
            sum += current
        }
    }

    return sum
};