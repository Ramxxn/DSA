/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    

    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = checkFromCenter(s, i, i)
        let evenPalindrome = checkFromCenter(s, i, i + 1)

        if (oddPalindrome.length > longest.length) longest = oddPalindrome;
        if (evenPalindrome.length > longest.length) longest = evenPalindrome;
    }
    return longest
};


function checkFromCenter(subStr, left, right) {
    let k = 0;
    while (subStr[left - k] && subStr[left - k] === subStr[right + k]) {
        k++
    }
    k--

    return subStr.slice(left - k, right + k + 1)
}