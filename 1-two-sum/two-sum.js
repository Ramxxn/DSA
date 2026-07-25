/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // use validator to make sure the input is valid.

    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let calc = target - nums[i]
        if (map.has(calc)) {
            return [map.get(calc), i]
        }

        map.set(nums[i], i)
    }
};