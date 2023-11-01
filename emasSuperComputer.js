function twoPluses(grid) {
    const newGrid = grid.map(row => row.split(''));
    const rows = grid.length;
    const cols = grid[0].length;

    let ans = 0;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
            let plusSize1 = 0;

            while (i + plusSize1 < rows && i - plusSize1 >= 0 && j + plusSize1 < cols && j - plusSize1 >= 0 &&
                newGrid[i + plusSize1][j] === "G" && newGrid[i - plusSize1][j] === "G" && newGrid[i][j + plusSize1] === "G" && newGrid[i][j - plusSize1] === "G") {
                newGrid[i + plusSize1][j] = newGrid[i - plusSize1][j] = newGrid[i][j + plusSize1] = newGrid[i][j - plusSize1] = 'S';

                for (let k = 0; k <= rows; k++) {
                    for (let l = 0; l <= cols; l++) {
                        let plusSize2 = 0;

                        while (k + plusSize2 < rows && k - plusSize2 >= 0 && l + plusSize2 < cols && l - plusSize2 >= 0 &&
                            newGrid[k + plusSize2][l] === "G" && newGrid[k - plusSize2][l] === "G" && newGrid[k][l + plusSize2] === "G" && newGrid[k][l - plusSize2] === "G") {
                            ans = Math.max(ans, (4 * plusSize1 + 1) * (4 * plusSize2 + 1));
                            plusSize2++;
                        }
                    }
                }
                plusSize1++;
            }
            
            plusSize1 = 0;
            
            while (i + plusSize1 < rows && i - plusSize1 >= 0 && j + plusSize1 < cols && j - plusSize1 >= 0 &&
                newGrid[i + plusSize1][j] === "S" && newGrid[i - plusSize1][j] === "S" && newGrid[i][j + plusSize1] === "S" && newGrid[i][j - plusSize1] === "S") {
                newGrid[i + plusSize1][j] = newGrid[i - plusSize1][j] = newGrid[i][j + plusSize1] = newGrid[i][j - plusSize1] = 'G';
                plusSize1++;
            }
        }
    }
    return ans;
}
