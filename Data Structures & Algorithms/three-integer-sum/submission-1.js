class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /*
        Approach:


        Brute force: 

        Use three pointers i = 0, j = i + 1, and k = i + 2
        declare a result array

        Try every triplet pair and move each along until we reach the end

        Iterate until i reaches the end
            let j = i;

            iterate until j reaches the end
                let k = j;

                iterate until k reaches the end
                    compare if the triplet equals to 0

                    increment k
                
                increment j

            increment i

        return the result array 

        */

        // let i = 0;

        // const result = [];

        // while (i < nums.length) {
        //     let j = i + 1;

        //     while (j < nums.length) {
        //         let k = j + 1;

        //         while (k < nums.length) {
        //             const sum = nums[i] + nums[j] + nums[k];
        //             if (sum === 0) {
        //                 result.push(new Set([nums[i], nums[j], nums[k]]));
        //             }
                    
        //             k++;
        //         }

        //         j++;
        //     }

        //     i++;
        // }

        // return result;


        /*
        Approach with two sum and sorted array:

        Use two pointers starting at the two ends of the non i element

        declare a result array

        let i = 0;
        let j = i + 1;
        let k = nums.length - 1;
        sort the input array

        iterate until we get to an i that nums[i] !== nums[i - 1]
        iterate while j < k
            compare if nums[i] + nums[j] + nums[k] === 0
                if true push into result array
            
            if nums[j] + nums[k] + nums[i] > 0
                decrement k
                else increment j



        return result array
        */

        const result = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) {
                continue;
            }

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while (nums[j] === nums[j - 1] && j < k) {
                        j++;
                    }
                } else if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                }
            }
        }

        return result;
    }
}
