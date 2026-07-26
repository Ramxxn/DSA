/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Validation can be use to make sure that input is number array
    let leftSum = 0
    let rightSum = nums.reduce((acc, cur) => acc + cur, 0)

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        if (rightSum === leftSum) {
            return i
        }
        leftSum += nums[i]
    }

    return -1

};