function sameNumbers(num) {

    let digits = num.toString();
    let sum = 0;
    let allSame = true;

    for (let i = 0; i < digits.length; i++) {
        let digit = Number(digits[i]);
        sum += digit;

        if (digit !== Number(digits[0])) {
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);


// function sameNumbers(num) {

//     let digits = num.toString();
//     let sum = digits.split("").reduce((acc, curr) => Number(acc) + Number(curr), 0);
//     let allSame = digits.split("").every((x) => x === digits[0]);

//     console.log(allSame);
//     console.log(sum);
// }

//We use every to check if all the digits in the input number are the same. The every method returns true if all elements in the array satisfy the condition, and false otherwise. We compare each digit in the array with the first digit using digit === digits[0].
//We use reduce to calculate the sum of the digits in the input number. The reduce method takes an accumulator (acc) and the current value (curr) as arguments, and it returns the accumulated result. We convert the accumulator and the current value to numbers using Number().