/**
 * @param {number} x
 * @return {number}
 */

//  overflow ? 0 : reverse case is still incomplete

var reverse = function (x) {

    const MIN = -2147483648;
    const MAX = 2147483647;

    let sign = x < 0 ? -1 : 1
    let number = Math.abs(x)

    let result = 0

    while (number !== 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10)

        result = result * 10 + lastDigit
    }

    if(result >  MAX || result < MIN){
        return 0;
    }

    return result * sign
};