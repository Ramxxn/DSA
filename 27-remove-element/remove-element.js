/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let count = 0;
    let i = 0
    let j = nums.length - 1

    while (i <= j) {

        if (nums[i] === val) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j--
        }else {
            i++
            count++
        }

    }

    return count;

};