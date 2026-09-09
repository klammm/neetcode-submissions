class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /*
        Approach:

        Keep track of a minimum price to buy and maximum price to sell

        Iterate through the array linearly
            compare minimum with current price 

            calculate the new profit with profit = current price - minimum price

            compare maximum with this new profit

        return max profit
        */

        let min = prices[0];
        let max = 0;

        for (let x of prices) {
            min = Math.min(min, x);

            const profit = x - min;

            max = Math.max(max, profit);
        }

        return max;
    }
}
