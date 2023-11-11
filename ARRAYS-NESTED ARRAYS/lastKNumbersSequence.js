function lastKNumbersSequence(n, k) {

    let resultArr = [1];

    for (let i = 1; i < n; i++) {

        let startIndex = Math.max(0, i - k);

        let currElement = resultArr.slice(startIndex, startIndex + k).reduce((a, b) => (a + b) , 0);
        resultArr.push(currElement);
    }

    return resultArr;
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);