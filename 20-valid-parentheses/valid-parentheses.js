/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function (s) {

    // validation is important for real world solution

    let bracketArray = []
    let bracket = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    for (let char of s){
        if(bracket[char]){
            bracketArray.push(char)
        }else{
            let lastOpenBracket = bracketArray.pop()
            if(bracket[lastOpenBracket] !== char){
                return false
            }
        }
    }
    return bracketArray.length === 0
};
