/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // validation for correct input

    let output = []

    for (let i = 0; i < numRows; i++) {

        let row = []

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(output[i - 1][j - 1] + output[i - 1][j]);
            }
        }

        output.push(row)

    }

    return output
};