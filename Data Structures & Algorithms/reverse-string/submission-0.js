class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        /*
        To reverse in place, we iterate along the string and have two pointers.
        one at the start i = 0 and one at the end j = s.length - 1
        As we iterate we swap the two and increment i and decrement j until i >= j
        */

        let i = 0;
        let j = s.length - 1;
        let temp;

        while (i < j) {
            temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }

        return s;
    }
}
