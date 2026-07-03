class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;

        const mid = Math.floor(nums.length / 2);
        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right)
    }

    merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        } 

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}
