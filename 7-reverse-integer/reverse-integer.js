/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {

    const MIN = Math.pow(-2, 31);
    const MAX = Math.pow(2, 31) -1;

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