class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        /*
        Brute force approach:

        Use the first string to check the rest

        Iterate through the first string in strs
            Iterate through strs array and check the same index at each string
                if all equal, push that character into the result string.
                if any one is not equal, return result right away
        */

        let result = "";

        for (let i = 0; i < strs[0].length; i++) {

            for (let j = 0; j < strs.length; j++) {
                const char = strs[j][i];
                if (char !== strs[0][i]) {
                    return result;
                }
            }

            result += strs[0][i];
        }

        return result;
    }
}
