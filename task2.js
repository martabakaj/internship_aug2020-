let imput_value;

let min = Math.round(Math.random() * 150);
let x = 75;
if (min > 75) x = min;
let max = x + Math.round(Math.random() * (200 - x));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Input number in range ${min}-${max}: `, num => {
    if (num > min && num < max) {
        console.log(`OK`);
    } else {
        console.log(`You shuld write correct number!`);
    }
    readline.close();
});
