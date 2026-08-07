class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        /*
        Approach:

        Declare two pointers i = 0 and j = 0;

        The idea is that we'll have one pointer i stay at the unique elements and j will traverse until we find an element that isn't equal to the position at i and just set the position at i to the different element at j. 

        Iterate until i < nums.length
            set nums[i] = nums[j]

            iterate until j < nums.length and if nums[j] === nums[i]
                increment j
            
            increment i
        
        return i
        */

        let i = 0;
        let j = 0;

        while ( j < nums.length ) {
            nums[i] = nums[j];

            while (j < nums.length && nums[i] === nums[j]) {
                j++;
            }

            i++;
        }

        return i;
    }
}
