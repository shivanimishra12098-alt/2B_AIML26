/*function sum(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum);
};
let arr = prompt("Enter numbers ").split(",").map(Number);
sum(...arr);*/
/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

    let arr = input.split(" ").map(Number);
    let newArr = [...arr];

    console.log("Original Array:", arr);
    console.log("New Array:", newArr);

    rl.close();
});*/
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a3 = [...a1, ...a2];
console.log(a3);
var a4 = [0, ...a1, ...a2, 7];
console.log(a4);
