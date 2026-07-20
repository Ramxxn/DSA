/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    // Validation
    if( !Number.isInteger(n) || n <= 0){
        throw new Error("Input must be a positive integer")
    }

    let answer = []

    for (let i = 1; i <= n; i++) {
        let word = ""
        if(i % 3 === 0){
            word += "Fizz"
        }

        if(i % 5 === 0){
            word += "Buzz"
        }

        answer.push(word || String(i))
    }

    return answer

};