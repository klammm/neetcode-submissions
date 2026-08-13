class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        /*
        Approach:

        use two pointers - i = 0 and j = k

        iterate while i < k 
            swap the two places using a temp variable and keep going
        return nums
        */

        // let i = 0;
        // let j = k;
        // let temp;

        // while (i < k) {
        //     temp = nums[i];
        //     nums[i] = nums[j];
        //     nums[j] = temp;
        //     j++;
        //     i++;
        // }

        // return nums;

        /*
        Reverse approach:

        Reverse the entire array

        Now split the array in terms of the first k elements and elements after that

        We're going to want to reverse these two halves and done.
        */

        k = k % nums.length;
        let l = 0;
        let r = nums.length - 1;

        this.reverse(0, nums.length - 1, nums);
        this.reverse(0, k - 1, nums);
        this.reverse(k, nums.length - 1, nums);
    }

    reverse(l, r, nums) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}
