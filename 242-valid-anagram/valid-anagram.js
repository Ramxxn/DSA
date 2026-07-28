/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    //valid input validation
    if (s.length !== t.length) return false
    
    let str1 = s.split("")
    let str2 = t.split("")

    for (let i = 0; i < str1.length; i++) {
        let idx = str2.indexOf(str1[i])

        if (idx === -1) {
            return false
        }
        str2.splice(idx, 1)
    }
    return true
};
