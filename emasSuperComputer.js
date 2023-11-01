function plusInRange(cur, rows, cols, plusSize){
    return cur[0] + plusSize < rows && cur[0] - plusSize >= 0 && cur[1] + plusSize < cols && cur[1] - plusSize >= 0;
}

function isChar(grid, cur, plusSize, char){
    return grid[cur[0] + plusSize][cur[1]] === char && 
           grid[cur[0] - plusSize][cur[1]] === char && 
           grid[cur[0]][cur[1] + plusSize] === char && 
           grid[cur[0]][cur[1] - plusSize] === char;
}

function twoPluses(grid) {
    const gridArray = grid.map(row => row.split(''));
    const rows = grid.length;
    const cols = grid[0].length;

    let ans = 0;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
            let plusSize1 = 0;

            while (plusInRange([i, j], rows, cols, plusSize1) && isChar(gridArray, [i, j], plusSize1, 'G')) {
                gridArray[i + plusSize1][j] = gridArray[i - plusSize1][j] = gridArray[i][j + plusSize1] = gridArray[i][j - plusSize1] = 'S';

                for (let k = 0; k <= rows; k++) {
                    for (let l = 0; l <= cols; l++) {
                        let plusSize2 = 0;

                        while (plusInRange([k, l], rows, cols, plusSize2) && isChar(gridArray, [k, l], plusSize2, 'G')) {
                            ans = Math.max(ans, (4 * plusSize1 + 1) * (4 * plusSize2 + 1));
                            plusSize2++;
                        }
                    }
                }
                plusSize1++;
            }
            
            plusSize1 = 0;
            
            while (plusInRange([i, j], rows, cols, plusSize1) && isChar(gridArray, [i, j], plusSize1, 'S')) {
                gridArray[i + plusSize1][j] = gridArray[i - plusSize1][j] = gridArray[i][j + plusSize1] = gridArray[i][j - plusSize1] = 'G';
                plusSize1++;
            }
        }
    }
    return ans;
}
