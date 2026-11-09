/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {

    let result = ""
    let value = String(columnNumber)
    function columnTitle(num) {
        return String.fromCharCode(65 + num)
    }

    while (columnNumber > 0) {

        let reminder = (columnNumber - 1) % 26

        result = columnTitle(reminder) + result

        columnNumber = Math.floor((columnNumber - 1) / 26)
    }

    return result
};