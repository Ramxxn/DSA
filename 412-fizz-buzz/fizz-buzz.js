/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    // Validation
    if( !Number.isInteger(n) || n <= 0){
        throw new Error("Input must be a positive integer")
    }
    
    let answer = new Array(n)

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            answer[i - 1] = "FizzBuzz"
        } else if (i % 5 == 0) {
            answer[i - 1] = "Buzz"
        } else if (i % 3 == 0) {
            answer[i - 1] = "Fizz"
        } else {
            answer[i - 1] = String(i)
        }
    }

    return answer

};