class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let j = 0;
        let result = "";

        while (i < word1.length || j < word2.length) {
            if (word1[i]) {
                result += word1[i];
            }

            if (word2[j]) {
                result+= word2[j];
            }

            i++;
            j++;
        }

        return result;
    }
}
