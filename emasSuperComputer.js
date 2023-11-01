function twoPluses(grid) {
  const gridArray = grid.map((row) => row.split(""));
  const rows = gridArray.length;
  const cols = gridArray[0].length;
  let max1 = 1;
  let max2 = -Infinity;

  for (let i = 1; i < rows - 1; ++i) {
    for (let j = 1; j < cols - 1; ++j) {
      if (gridArray[i][j] === "G") {
        let plusSize = 1;
        let result = 1;

        while (
          i - plusSize >= 0 &&
          i + plusSize < rows &&
          j - plusSize >= 0 &&
          j + plusSize < cols &&
          gridArray[i - plusSize][j] === "G" &&
          gridArray[i + plusSize][j] === "G" &&
          gridArray[i][j - plusSize] === "G" &&
          gridArray[i][j + plusSize] === "G"
        ) {
          // Mark the cells with "S"
          if (plusSize === 1) {
            gridArray[i][j] = "S";
          }
          gridArray[i - plusSize][j] = "S";
          gridArray[i + plusSize][j] = "S";
          gridArray[i][j - plusSize] = "S";
          gridArray[i][j + plusSize] = "S";

          result = result + 4;
          plusSize++;
        }

        // Update the max1 and max2 values
        if (result > max1) {
          max2 = max1;
          max1 = result;
        } else if (result > max2) {
          max2 = result;
        }
      }
    }
  }
  return max1 * max2;
}
