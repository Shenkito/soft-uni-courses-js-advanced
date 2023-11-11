function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => a - b);
    let half = Math.ceil(sorted.length / 2);
    let result = [];

    for (let i = sorted.length - 1; i >= sorted.length - half; i--) {
        result.push(sorted[i]);
    }
    
    result.reverse();
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);