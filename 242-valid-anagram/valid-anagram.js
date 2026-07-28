/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    //valid input validation
    if (s.length !== t.length) return false

    let str1 = s.split("").sort()
    let str2 = t.split("").sort()

    for (let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]){
            return false
        }
    }
    return true
};
