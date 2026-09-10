class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /*
        Approach:

        Sliding window

        Declare a variable called set and assign to new Set. We'll be using this to check duplicate characters

        Declare a left variable set to 0

        Declare a max variable set to 0

        Iterate linearly across the string s right = 0
            Compare whether the next element s[right] is in the set. 
            if not, add it to the set.
            if it is, get the length of the set and set the new max.

            iterate to catch up left to current right until the set doesn't have the left in it
                if s[left] is in the set, remove it and iterate left up 

        return max
          r
        dvdf
          l
        set = [v]
        max = 2
        left = 1
        */

        const set = new Set(); 
        let max = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            if (!set.has(s[right])) {
                set.add(s[right]);
            } else {
                max = Math.max(max, set.size);

                while (set.has(s[right])) {
                    set.delete(s[left]);
                    left++;
                }

                set.add(s[right]);
            }
        }

        return Math.max(max, set.size);
    }
}
