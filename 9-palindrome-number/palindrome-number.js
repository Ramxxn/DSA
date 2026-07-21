/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // if(!Number.isInteger(x)){
    //     throw new Error("Input must be an integer")
    // }

    if (x < 0) return false;

    if (x < 10) return true;

    let reverseX = 0
    let value = x

    while (value > 0) {
        let reminder = value % 10;
        value = Math.floor(value / 10)
        reverseX = reverseX * 10 + reminder
    }

    return reverseX == x

};