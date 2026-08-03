class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        /*
        Brute-force Approach:

        use two pointers i = 0 and j = i

        declare a count variable

        iterate along with nested while looops
            while i 
                while j 
                    compare if it reaches the sum
                        true: increment count
                        false: move on
        */

        let count = 0;
        let i = 0; 

        while (i < nums.length) {
            let j = i;
            let sum = 0;

            while (j < nums.length) {
                if (sum + nums[j] === k) {
                    count++;
                }

                sum += nums[j];
                j++;
            }

            i++;
        }

        return count;
    }
}
