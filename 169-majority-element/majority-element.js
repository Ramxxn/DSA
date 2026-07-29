/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    if (nums.length === 0) return null;
    // validation for correct input


    let value = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {

        if(count === 0){
            value = nums[i]
        }

        if(nums[i] === value){
            count++
        }else{
            count--
        }

    }

    return value

};