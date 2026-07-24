/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */

var merge = function (nums1, m, nums2, n) {
    let nums1CurrentLastIndex = m - 1;
    let nums2CurrentLastIndex = n - 1;
    let combineNums1LastIndex = m + n - 1;

    while (nums2CurrentLastIndex >= 0) {
        if (nums1CurrentLastIndex >= 0 && nums1[nums1CurrentLastIndex] > nums2[nums2CurrentLastIndex]) {
            nums1[combineNums1LastIndex] = nums1[nums1CurrentLastIndex];
            nums1CurrentLastIndex--;
        } else {
            nums1[combineNums1LastIndex] = nums2[nums2CurrentLastIndex];
            nums2CurrentLastIndex--;
        }
        combineNums1LastIndex--;
    }

};