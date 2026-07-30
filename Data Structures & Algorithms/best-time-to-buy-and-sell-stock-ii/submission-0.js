class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /*
        Approach: 
        
        If the previous day is less than the current day, that means we want to sell and make a profit.

        Add up the profit made and return the profit at the end.

        profit += current day - previous day 
        */

        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;
    }
}
