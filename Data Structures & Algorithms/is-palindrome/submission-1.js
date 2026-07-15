class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /*
        Two pointer approach:

        Have one pointer start at the beginning and another pointer start at the end
        i = 0
        j = s.length - 1

        Converge the two pointers towards the middle. 
        Iterate until the two pointers meet at the middle i = j
        If at any point the two pointers do not equal each other, return false.
        
        Return true at the end of the loop
        */

        const cleanString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let i = 0;
        let j = cleanString.length - 1;

        while (i < j) {
            if (cleanString[i] !== cleanString[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
