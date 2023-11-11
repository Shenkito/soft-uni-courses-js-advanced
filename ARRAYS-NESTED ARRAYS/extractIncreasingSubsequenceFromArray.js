function extractIncreasingSubsequenceFromArray(array) {

    let biggestNum = Number.MIN_SAFE_INTEGER;

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if (currentNum >= biggestNum) {
            result.push(currentNum);
            
            biggestNum = currentNum;
        } else {
            continue;
        }
    }

    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("------------------------------------------------------");
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
console.log("------------------------------------------------------");
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);