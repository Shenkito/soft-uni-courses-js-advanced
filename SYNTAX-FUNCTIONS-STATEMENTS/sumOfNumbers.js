function sumOfNumbers(num1, num2) {

    let res = 0;
    let toNum1 = Number(num1);
    let toNum2 = Number(num2);

    for (let i = toNum1; i <= toNum2; i++) {
        res += i;
    }

    return res;
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');