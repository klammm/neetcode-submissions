class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        /*
        Approach:

        Determine the n/3 size initially.
        Declare a hash to keep track of element occurrance
        Iterate along nums linearly
            Populate the hash with occurrance

        Iterate the hash
            Any hash value that is greater than n/3, push into an array
        
        return the result array
        */

        const result = [];
        const majority = Math.floor(nums.length / 3);
        const hash = nums.reduce((acc, cV) => {
            if (acc[cV]) {
                acc[cV]++;
            } else {
                acc[cV] = 1;
            }

            return acc;
        }, {});

        for (let x in hash) {
            if (hash[x] > majority) {
                result.push(Number(x));
            }
        }

        return result;
    }
}
