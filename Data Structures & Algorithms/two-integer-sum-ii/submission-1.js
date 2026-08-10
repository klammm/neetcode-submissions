class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        /*
        Approach:

        Brute force: 
        Use two pointers i = 0 and j = i

        Traverse j until we find a match target - numbers[j] = numbers[i]
        If j has reached the end without finding a match, increment i up 1
        if we find a match, return the indices + 1 for 1-indexed

        return [] if no solution found but we're guaranteed a solution to exist so we'll probably never reach the end return statement or out of the loop


        Better approach:

        Use two pointers i = 0 and j = numbers.length - 1

        Traverse by incrementing i and decrementing j until i and j meet
            make sure to compare here whether numbers[i] + numbers[j] === target
                if so return indices + 1
            if numbers[i] + numbers[j] > target
                decrement j
                else increment i
            

        */

        // let i = 0;

        // while (i < numbers.length) {
        //     let j = i + 1;

        //     while (j < numbers.length) {
        //         const diff = target - numbers[j];

        //         if (diff === numbers[i]) {
        //             return [i + 1, j + 1];
        //         }

        //         j++;
        //     }

        //     i++;
        // }

        // return []

        let i = 0;
        let j = numbers.length - 1;

        while (i < j) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }

            if (numbers[i] + numbers[j] > target) {
                j--;
            } else {
                i++;
            }
        }

        return [];
    }
}
