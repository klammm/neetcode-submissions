class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        /*
        Declare a count variable
        Iterate along nums i
            if val === nums[i]
                true: increment count. set nums[i] = null
        return count
        */

        let count = 0;
        let j = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums[i] = null;
            } else {
                count++;
            }
        }

        nums = nums.sort();

        return count;
    }
}
