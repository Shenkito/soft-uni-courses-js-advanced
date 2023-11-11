function magicMatrices(matrix) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
        }
        rowSums.push(rowSum);
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            colSum += matrix[i][j];
        }
        colSums.push(colSum);
    }

    let isMagic = rowSums.every((sum) => sum === rowSums[0]) && colSums.every((sum) => sum === colSums[0]);

    console.log(isMagic);
}

// magicMatrices([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]);

// console.log("=====");

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

// console.log("=====");

// // magicMatrices(
// //     [[1, 0, 0],
// //     [0, 0, 1],
// //     [0, 1, 0]]);