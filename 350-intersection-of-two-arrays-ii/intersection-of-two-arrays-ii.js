/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // Input validation

    let small = nums1;
    let large = nums2;

    if (nums1.length > nums2.length) {
        small = nums2;
        large = nums1;
    }

    let map = new Map()
    let ans = []

    for (let num of small) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (let num of large) {
        if (map.get(num) > 0) {
            ans.push(num)
            map.set(num, (map.get(num) || 0) - 1)
        }
    }

    return ans
};