function negativePositiveNums(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }


    for (let j = 0; j < result.length; j++) {
        console.log(result[j]);
    }
}

negativePositiveNums([7, -2, 8, 9]);
negativePositiveNums([3, -2, 0, -1]);