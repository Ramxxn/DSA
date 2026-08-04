/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // validation for correct input
    let firstIdx = 0
    let lastIdx = numbers.length - 1

    // Trick to solve this -->
    //  (if) firstPointer + lastPointer > target  ---> lastPointer - 1
    //  (else if) firstPointer + lastPointer < target  ---> firstPointer + 1

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[firstIdx] + numbers[lastIdx] > target) {
            lastIdx--
        } else if (numbers[firstIdx] + numbers[lastIdx] < target) {
            firstIdx++
        } else {
            return [firstIdx + 1, lastIdx + 1]
        }
    }
};