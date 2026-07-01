class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /*
        Iterate through the strs array and create hashes for each element
        Create a hash for each string in the array, where the hash contains the occurrences of each character. 
        declare a result array []
        Iterate through the strs array i = 0
            if current element strs[i] is null, skip over. continue;
            declare a list array with [strs[i]] 
            iterate through the rest of the strs array so start at j = i + 1
                check if the ith hash is the same as the jth hash
                    true: push the current element strs[j] into the list. then mark that index as null
            push list into result
        return result
        */

        const hashes = strs.map((str) => {
            return str.split('').reduce((acc, currVal) => {
                if (acc[currVal]) {
                    acc[currVal]++;
                } else {
                    acc[currVal] = 1;
                }

                return acc;
            }, {});
        });

        const result = [];

        for (let i = 0; i < strs.length; i++) {
            if (!hashes[i]) continue;

            const list = [strs[i]];

            for (let j = i + 1; j < strs.length; j++) {
                if (!hashes[j]) continue;
                if (this.compareHash(hashes[i], hashes[j])) {
                    list.push(strs[j]);
                    hashes[j] = null;
                }
            }

            result.push(list);

        }

        return result;
    }

    compareHash(hash1, hash2) {
        if (Object.keys(hash1).length !== Object.keys(hash2).length) return false;

        for (const x in hash1) {
            if (hash1[x] !== hash2[x]) {
                return false;
            }
        }

        return true;
    }
}
