class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        /*
        Iterate through nums and create a hash based on element occurrence
        Iterate through hash and return the key with the highest occurrence
        */

        let max = -Infinity;
        let key = null;

        const hash = nums.reduce((acc, cV) => {
            if (acc[cV]) {
                acc[cV]++;
            } else {
                acc[cV] = 1;
            }

            return acc;
        }, {});

        for (let x in hash) {
            if (hash[x] >= max) {
                key = x;
                max = hash[x];
            }
        }

        return key;
    }
}
