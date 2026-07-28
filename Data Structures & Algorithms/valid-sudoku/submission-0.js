class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        /*
        One pass Approach: 

        Create a hash for columns, rows, and squares.

        Iterate through the 2d matrix:
            skip if the current board element is blank "."
            if the current board element is in any of the hashes, immediately return false.
            Add the current board element to all 3 hashes 
        
        return true at the end.


        */

        const cols = {};
        const rows = {};
        const squares = {};

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const currBoardEle = board[r][c];

                if (currBoardEle === ".") {
                    continue;
                }

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}}`;

                // Check if the current board element exists in any of the hashes
                if ((rows[r] && rows[r].has(currBoardEle)) || (cols[c] && cols[c].has(currBoardEle)) || (squares[squareKey] && squares[squareKey].has(currBoardEle))) {
                    return false;
                }

                // If the set doesn't exist for the current row/col/square, create it
                if (!rows[r]) {
                    rows[r] = new Set();
                }

                if (!cols[c]) {
                    cols[c] = new Set();
                }

                if (!squares[squareKey]) {
                    squares[squareKey] = new Set();
                }

                // add the current board element to the respective hashes
                rows[r].add(currBoardEle);
                cols[c].add(currBoardEle);
                squares[squareKey].add(currBoardEle);
            }
        }

        return true;
    }
}
