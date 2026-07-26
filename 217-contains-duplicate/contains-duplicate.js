/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    //Validator to check input is nums array
    let set = new Set(nums)

    if (nums.length != set.size) {
        return true
    }
    return false;
};