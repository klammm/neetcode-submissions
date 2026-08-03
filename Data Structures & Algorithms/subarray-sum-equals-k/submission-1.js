class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        /*
        Brute-force Approach:

        use two pointers i = 0 and j = i

        declare a count variable

        iterate along with nested while looops
            while i 
                while j 
                    compare if it reaches the sum
                        true: increment count
                        false: move on
        */

        // let count = 0;
        // let i = 0; 

        // while (i < nums.length) {
        //     let j = i;
        //     let sum = 0;

        //     while (j < nums.length) {
        //         if (sum + nums[j] === k) {
        //             count++;
        //         }

        //         sum += nums[j];
        //         j++;
        //     }

        //     i++;
        // }

        // return count;

        /*
        Prefix sum approach:

        Declare a count, currentSum, and prefixSum hash variable

        Iterate through nums linearly
            increment currentSum by current nums element
            declare a variable named diff = currentSum - k
            increment count by prefixSum[diff] ?? 0
            set prefixSum[currentSum] = (prefixSum[currentSum] ?? 0) + 1

        return count
        */

        let count = 0;
        let currentSum = 0;
        const prefixSum = {0: 1};

        for (let x of nums) {
            currentSum += x;
            let diff = currentSum - k;
            count += prefixSum[diff] ?? 0;
            prefixSum[currentSum] = (prefixSum[currentSum] ?? 0) + 1;
        }

        return count;
    }
}
