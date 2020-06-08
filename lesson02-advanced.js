'use strict';
const num = 266219;

const multiplicationOfNumbers = (number) => {
    return number
        .toString()
        .split('')
        .reduce((result, number) => {
            return result * number;
        }, 1);
};

console.log(multiplicationOfNumbers(num));

const multiplicationOfNumbers2 = (number) => {
    const numberStr = number.toString();
    const numberCount = numberStr.length;
    let i = 0;
    let result = 1;
    while (i < numberCount) {
        result *= Number(numberStr.charAt(i));
        i++;
    }
    return result;
};

console.log(multiplicationOfNumbers2(num));

const pow = (num, exponent) => {
    return num ** exponent;
};

console.log(pow(multiplicationOfNumbers(num), 3));

const getFirstTwoNumbers = (number) => {
    return number.toString().substring(0, 2);
};

document.write(
    getFirstTwoNumbers(
        pow(
            multiplicationOfNumbers(num),
            3
        )
    )
);
