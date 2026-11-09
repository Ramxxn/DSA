/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let result = 0;

    function columnNumber(str) {
        return str.charCodeAt(0) - 64
    }

    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + columnNumber(columnTitle[i])
    }

    return result
};