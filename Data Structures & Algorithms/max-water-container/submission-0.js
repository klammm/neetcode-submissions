class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        /*
        Approach: 

        Use two pointer approach and start at both ends
        i = 0 , j = heights.length - 1

        Declare a max variable and compare against the max each time we iterate

        Iterate while i < j
            To calculate area: (j - i) * Min(heights[i], heights[j]) 
            Check if current water is greater than the max
                true: set new max
                false: move on
        
        return max
        */

        let i = 0; 
        let j = heights.length - 1;
        let max = -Infinity;

        while (i < j) {
            const area = (j - i) * Math.min(heights[i], heights[j]);
            max = Math.max(max, area);
            
            if (heights[i] <= heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return max;
    }
}
