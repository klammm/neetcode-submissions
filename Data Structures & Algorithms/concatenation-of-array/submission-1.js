class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = [];

        for (let i = 0; i < 2; i++) {
            nums.forEach((_num) => {
                result.push(_num);
            })
        }

        return result;
    }
}
