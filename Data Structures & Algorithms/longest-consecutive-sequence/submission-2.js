class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        /*
        Approach: 
        Since we're aiming for O(n) time, we can't sort the array immediately.

        Iterate along the array linearly and create a hash map of all the elements

        We want to grab elements where n-1 does not exist so we know the start of a sequence.

        Iterate along the array again and push into an array start sequence elements

        [2, 20, 10]

        Keep track of a max sequence count

        Iterate along the start sequence elements array.
            Declare a count variable
            Continuously add one and check if that element exists in the hash table.
            If true -> increment count++
            If False -> compare current count with the max sequence count and take the larger of the two

        Return the sequence count at the end
        */

        const hash = {};
        let max = 0;
        const startSequences = [];

        for (let x of nums) {
            if (!hash[x]) {
                hash[x] = 1;
            }
        }

        for (let x of nums) {
            if (!hash[x-1]) {
                startSequences.push(x);
            }
        }

        for (let x of startSequences) {
            let count = 0;
            let i = x;

            while (hash[i]) {
                count++;
                i++;
            }

            max = Math.max(max, count);

        }

        return max;
    }
}
