function processOddPositions(arrNums) {

    let newArr = [];

    for (let i = 0; i < arrNums.length; i++) {

        if (i % 2 !== 0) {
            newArr.push(Number(arrNums[i]) * 2);
        }
    }

    console.log(newArr.reverse().join(" "));
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);