class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for (let x of nums) {
            if (set.has(x)) {
                return true;
            } else {
                set.add(x);
            }
        }

        return false;
    }
}
