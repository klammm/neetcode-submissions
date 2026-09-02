class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /*
        Approach:

        declare a bucket of rain water variable starting at 0

        Iterate until we hit a non-zero bar. i
            Check if next element is going to be less than height[i]
                if true: start iterating with j pointer until we hit another height that is equal to or greater than height[i]
                    once we've got a valid height with trapped rain water, we have to calculate the amount of rain water. 
                        calculate by subtracting height[i] with each element until we get to j. then add that into the bucket of rain water. once i reaches j, we start the whole thing again with finding another set of trapped rain water
                if false: move i along with continue


        return bucket of rain water at the end

         
                             i
        [0,2,0,3,1,0,1,3,2,1]
                       j

        rainWater = 9
        */

        let rainWater = 0;

        let i = 0;

        while (i < height.length) {
            
            if (height[i] === 0) {
                i++
            } else {
                let j = i + 1;
                let rightWall = j;

                while (j < height.length) {
                    if (height[j] >= height[i]) {
                        rightWall = j;
                        break;
                    }

                    if (height[j] > height[rightWall]) {
                        rightWall = j;
                    }

                    j++;
                } 

                let waterLevel = Math.min(height[i], height[rightWall]);

                for (let k = i + 1; k < rightWall; k++) {
                    rainWater += waterLevel - height[k];
                }

                i = rightWall;
            }
        }

        return rainWater;
        
    }
}
