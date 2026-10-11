/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let n = 0
        while (n < needle.length && haystack[i + n] === needle[n]) {
            n++
        }

        if (n === needle.length) return i
    }

    return -1
};