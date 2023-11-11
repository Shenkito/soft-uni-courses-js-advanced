function sortingNumbers(array) {

    let sorted = array.sort((a, b) => b - a);
    let result = [];

    while (sorted.length > 0) {
        result.push(sorted.pop());
        result.push(sorted.shift());
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);