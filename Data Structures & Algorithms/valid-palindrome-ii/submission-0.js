class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        /*
        Approach: 
        To check if it's a valid palindrome, we start with two pointers and move them along in both direction to compare.
        If there's a mismatch, i can delete one character. Then i take the substring and reverse it to check if it's a palindrome remaining.
        */

        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                const leftString = s.slice(0, i) + s.slice(i + 1);
                const rightString = s.slice(0, j) + s.slice(j + 1);

                return this.isValidPalindrome(leftString) || this.isValidPalindrome(rightString);
            }

            i++;
            j--;
        }

        return true;
    }

    isValidPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
