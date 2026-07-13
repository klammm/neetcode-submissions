class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        /*
        Brute force approach: 

        Iterate nums linearly once and calculate the overall product of the array
        Iterate nums again and divide each element by the total product.
        Return new array

        Blows up when dividing by 0. 

        Need to calculate just by having nested for loops

        Prefix sum with multiplication approach and suffix sum.

        Iterate through nums and calculate the product based on the previous element. Prefix sum with multiplication
        Do the same for the other way around right to left for the suffix.

        The result is prefix * suffix at the same index iterating linearly.

        prefix[current] = prefix[previous] * nums[previous] left to right
        suffix[current] = suffix[previous] * nums[previous] right to left

        [1,2,4,6]
         *
        
        pre
        prefixSum = [1,2,8,48]
        suffixSum = [48,48,24,6]
        */

        // Prefix - Suffix Sum approach:
        const numsLength = nums.length;
        const prefixSum = new Array(numsLength).fill(0);
        const suffixSum = new Array(numsLength).fill(0);
        const result = [];

        // prefixSum computation
        prefixSum[0] = 1;
        for (let i = 1; i < numsLength; i++) {
            prefixSum[i] = prefixSum[i - 1] * nums[i - 1];
        }

        suffixSum[numsLength - 1] = 1;
        for (let j = numsLength - 2; j >= 0; j--) {
            suffixSum[j] = suffixSum[j + 1] * nums[j + 1];
        }

        for (let k = 0; k < numsLength; k++) {
            const product = prefixSum[k] * suffixSum[k];
            result.push(product);
        }

        return result;
    }
}
