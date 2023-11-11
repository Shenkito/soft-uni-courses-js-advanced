function aggregateElements(array) {

    let sum = 0;
    let sumOfInverse = 0;
    let concat = "";

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    for (let i = 0; i < array.length; i++) {
        sumOfInverse += 1 / array[i];
    }

    for (let i = 0; i < array.length; i++) {
        concat += array[i];
    }

    console.log(sum);
    console.log(sumOfInverse);
    console.log(concat);
}

aggregateElements([1, 2, 3]);