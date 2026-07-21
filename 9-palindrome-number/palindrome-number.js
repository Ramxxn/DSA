/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str1 = String(x)
    let str2 = String(x).split("").reverse().join("");

    if (str1 == str2) {
        return true;
    } else {
        return false
    }
};