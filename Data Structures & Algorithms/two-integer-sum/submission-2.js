class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*
        Create a hash where the keys are the values nums[i] and the value is the index of the nums element i
        Iterate nums
        If target - nums[i] exists, then return the current index i and the hash[nums[i]] 
        */

        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            hash[nums[i]] = i;
        }

        for (let j = 0; j < nums.length; j++) {
            const sub = target - nums[j];
            if (hash[sub] && hash[sub] !== j) {
                return [j, hash[sub]]
            }
        }

        return [];
    }
}
