import read from "readline-sync";
import aritmetica from "./aritmetica.js";

const { soma, sub } = aritmetica;

function main() {
    console.log("-------------------------------");
    const len = Number(read.question("Enter the length of the arrays: "));
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < len; i++) {
        arr1.push(Number(read.question(`Enter element ${i + 1} of the first array: `)));
    }

    for (let i = 0; i < len; i++) {
        arr2.push(Number(read.question(`Enter element ${i + 1} of the second array: `)));
    }

    console.log("-------------------------------");
    console.log("Enter the operation +, -");
    let op = read.question("Which operation do you want? ");

    let resultado = [];

    switch (op) {
        case '+':
            resultado = soma(arr1, arr2);
            break;
        case '-':
            resultado = sub(arr1, arr2);
            break;
        default:
            console.log("ERROR");
            return;
    }

    console.log("Result:", resultado);
}

main();
