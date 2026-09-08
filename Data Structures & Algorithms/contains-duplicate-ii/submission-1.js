class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let left = 0;
        const set = new Set();

        for (let i = 0; i < k; i++) {
            if (set.has(nums[i])) {
                return true;
            } else {
                set.add(nums[i]);
            }
        }

        for (let right = k; right < nums.length; right++) {
            if (set.has(nums[right])) {
                return true;
            } else {
                set.add(nums[right]);
            }

            set.delete(nums[left++])
        }


        return false
    }
}
