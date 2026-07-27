/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //Validation for correct input alway better option.

    let uniqueNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        uniqueNumber = uniqueNumber ^ nums[i]
    }

    return uniqueNumber
};