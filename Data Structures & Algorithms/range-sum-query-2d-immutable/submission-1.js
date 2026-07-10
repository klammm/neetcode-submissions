class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rowLength = matrix.length;
        const columnLength = matrix[0].length;

        this.sumMatrix = Array.from({ length: rowLength + 1 }, () => Array(columnLength + 1).fill(0));

        for (let i = 0; i < rowLength; i++) {
            let prefix = 0;

            for (let j = 0; j < columnLength; j++) {
                prefix += matrix[i][j];
                let above = this.sumMatrix[i][j + 1];
                this.sumMatrix[i + 1][j + 1] = prefix + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1 = row1 + 1;
        row2 = row2 + 1;
        col1 = col1 + 1;
        col2 = col2 + 1;

        const bottomRight = this.sumMatrix[row2][col2];
        const above = this.sumMatrix[row1 - 1][col2];
        const left = this.sumMatrix[row2][col1 - 1];
        const topLeft = this.sumMatrix[row1 - 1][col1 - 1];

        return bottomRight - above - left + topLeft
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
