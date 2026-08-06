class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        /*
        Approach:

        Place nums2 starting at nums1[m]
        Then sort nums1 in place
        */

        let i = m;
        let j = 0;

        while (i < nums1.length) {
            nums1[i++] = nums2[j++];
        }

        nums1.sort((a, b) => a - b);

        return nums1;

    }
}
