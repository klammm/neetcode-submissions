class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        /*
        Approach:

        Declare a minimum variable defaulted to 1

        Iterate through nums until we find a minimum that doesn't exist in nums
            if minimum is found in nums
                true: increment minimum by 1 and iterate again
        return minimum
        */

        let min = 1;
        let found = true;

        while (found) {
            found = false;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === min) {
                    found = true;
                    break;
                }
            }

            if (found) {
                min++;
            }
        }

        

        return min;
    }
}
