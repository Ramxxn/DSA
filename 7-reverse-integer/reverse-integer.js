/**
 * @param {number} x
 * @return {number}
 */

//  overflow ? 0 : reverse case is still incomplete

var reverse = function (x) {

    const MIN = -2147483648;
    const MAX = 2147483647;
    let output = ""
    let sign = x < 0 ? -1 : 1
    let value = String(Math.abs(x))

    for (let i = value.length - 1; i >= 0; i--) {
        output += value[i]
    }

    let overflowCheck = output * sign

    if (overflowCheck > MAX || overflowCheck < MIN ){
        return 0
    }else{
        return overflowCheck
    }
};