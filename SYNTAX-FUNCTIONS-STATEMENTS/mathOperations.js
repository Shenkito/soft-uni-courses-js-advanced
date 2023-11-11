function mathOperations(num1, num2, op) {

    let res;

    switch (op) {

        case "+":
            res = num1 + num2;
        break;
        case "-":
            res = num1 - num2;
        break;
        case "*":
            res = num1 * num2;
        break;
        case "/":
            res = num1 / num2;
        break;
        case "%":
            res = num1 % num2;
        break;
        case "**":
            res = num1 ** num2;
        break
    }

    console.log(res);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');