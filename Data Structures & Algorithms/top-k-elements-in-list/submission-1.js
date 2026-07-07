class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
        Declare a result array []
        Create a hash with the number of occurrences per element
        Create an array with the number of occurrences.
        Sort the array. 
        Slice the sorted array by k. 
        iterate through the hash to see which keys to return
            if hash[key] === sortedarray[i]
                psuh into result array
        return result array
        */

        const result = [];
        let j = 0;
        const hash = nums.reduce((acc, cV) => {
            if (acc[cV]) {
                acc[cV]++;
            } else {
                acc[cV] = 1;
            }

            return acc;
        }, {});

        const highestOccurrences = Object.values(hash).sort((a, b) => b - a).slice(0, k);

        while (j < k) {
            const x = Object.keys(hash).find(key => hash[key] === highestOccurrences[j]);
            result.push(x);
            delete hash[x];
            j++;
        }

        return result;
    }
}
