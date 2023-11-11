function biggestElement(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {

        let currArr = input[i];

        for (let j = 0; j < currArr.length; j++) {
            result.push(currArr[j]);
        }
    }

    let biggestNum = Math.max(...result);
    return biggestNum;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));