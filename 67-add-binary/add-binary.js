/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0
    let output = "";

    while (i >= 0 || j >= 0 || carry > 0) {

        digitA = Number(a[i] || 0)
        digitB = Number(b[j] || 0)

        let sum = digitA + digitB + carry

        // Current binary digit
        output += sum % 2;

        // Carry for next position
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return output.split("").reverse().join("")

};