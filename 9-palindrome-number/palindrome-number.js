/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if(!Number.isInteger(x)){
        throw new Error("Input must be an integer")
    }

    let str1 = String(x)
    let str2 = String(x).split("").reverse().join("");

    return str1 === str2
};