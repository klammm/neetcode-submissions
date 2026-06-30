class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hash1 = this.createHashMap(s);
        const hash2 = this.createHashMap(t);

        for (let x in hash1) {
            if (hash1[x] !== hash2[x]) {
                return false;
            }
        }

        return true;
    }

    createHashMap(string) {
        return string.split('').reduce((acc, currVal) => {
            if (acc[currVal]) {
                acc[currVal]++;
            } else {
                acc[currVal] = 1;
            }

            return acc;
        }, {});
    }
}
