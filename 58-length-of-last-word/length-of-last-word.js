/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let word = s.trim()
    let count = 0
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] === " "){
            return count
        }
        count++
    }

    return count
};