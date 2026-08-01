/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // validation for valid input
    let minPrice = Infinity
    let maxProfit = 0

    // trick to solve -->
    // Rule 1: if price < minPrice -> update minPrice
    // Rule 2: else update maxProfit = max(maxProfit, price - minPrice)

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }

    return maxProfit
};