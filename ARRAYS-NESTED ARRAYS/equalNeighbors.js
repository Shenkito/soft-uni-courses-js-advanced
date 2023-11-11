function equalNeighbors(matrix) {

    let count = 0;
    let arr = [];

    for (let i = 0; i < matrix.length; i++) { // обхождам всеки един масив от матрицата
        for (let j = 0; j < matrix[i].length; j++) { // обхождам дадения масив всеки елемент по отделно
            if (i + 1 < matrix.length && matrix[i][j] === matrix[i + 1][j]) { 
                count++;
                arr.push(matrix[i][j], matrix[i + 1][j])
            }
            if (j + 1 < matrix[i].length && matrix[i][j] === matrix[i][j + 1]) {
                count++
                arr.push(matrix[i][j] === matrix[i][j + 1]);
            }
        }
    }

    console.log(arr);
    return count;
}

equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

equalNeighbors([
['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);