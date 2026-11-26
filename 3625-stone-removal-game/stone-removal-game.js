/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
    let playerTurnCount = 0;
    let stones = 10
    let win = false

    if(n < stones){
        return false
    }

    while (n >= stones) {
        n -= stones;
        win = !win
        stones--        
    }

    return win
};