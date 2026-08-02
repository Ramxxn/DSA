/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // validation
    let currentSum = nums[0]
    let maxSum = nums[0]

    // Trick to solve -->
    // Rule 1: currentSum = max(currentElment, currentSum + currentElement)
    // Rule 2: maxSum = max(currentSum, maxSum)

    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
};