class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        /*
        To sort in place, we can use 2 pointers. One for the beginning 0's and one for the end 2's. 
        i = 0
        j = nums.length - 1

        The idea is to move 0's to the front and 2's to the back and increment/decrement from there with 2 pointers.

        Iterate along nums x = 0
                if red:
                    swap current element with nums[i]
                        [nums[i], nums[x]] = [nums[x], nums[i]]
                    i++;
                if blue:
                    swap current element with nums[j]
                        [nums[j], nums[x]] = [nums[x], nums[j]]
                    j--;
                    x--; to check that back number we moved in place
        return nums;
        */

        let i = 0;
        let j = nums.length - 1;

        for (let x = 0; x < nums.length; x++) {
            if (x > j) break;
            if (nums[x] === 0) {
                [nums[i], nums[x]] = [nums[x], nums[i]];
                i++;
            } else if (nums[x] === 2) {
                [nums[j], nums[x]] = [nums[x], nums[j]];
                j--;
                x--;
            }
        }

        return nums;
    }
}
