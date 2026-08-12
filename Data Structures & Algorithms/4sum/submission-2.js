class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        /*
        Approach:

        Sort the array first.

        Declare a result array

        Use four pointers i, j, k, l.

        2 sum approach but with 2 extra pointers in the beginning

        Iterate for loop i to nums.length
            iterate j = i + 1 for loop j to nums.length
                iterate until k < l
                    compare if i j k l sum is equal to target
                    if lower, then increment k
                    if higher, then decrement l


        return result
        */

        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            for (let j = i + 1; j < sortedNums.length; j++) {
                if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

                let k = j + 1;
                let l = sortedNums.length - 1;

                while (k < l) {
                    const sum = sortedNums[i] + sortedNums[j] + sortedNums[k] + sortedNums[l];
                    if (sum === target) {
                        result.push([sortedNums[i], sortedNums[j], sortedNums[k], sortedNums[l]]);
                        k++;
                        l--;

                        while (k < l && sortedNums[l] === sortedNums[l + 1]) {
                            l--;
                        } 

                        while (k < l && sortedNums[k] === sortedNums[k - 1]) {
                            k++;
                        }
                    } else if (sum > target) {
                        l--;
                    } else if (sum < target) {
                        k++;
                    }
                }
            }
        }

        return result;
    }
}
