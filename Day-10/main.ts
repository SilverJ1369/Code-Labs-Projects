//Day 3
//Exercise 2
let myName: string = 'Johnny';

console.log(myName);

//Exercise 3
function calculateRectArea(length: number, width: number): number {
    return length * width;
}
console.log(calculateRectArea(5, 2));

//Exercise 4
let testNum: number = 16;

testNum % 2 == 0 ? console.log('Even') : console.log('Odd');

//Exercise 6
const myPromptName: string | null = prompt("Wie Heißen sie?: ");

myPromptName == null ? alert("Bitte geben Sie Ihren Namen ein") : console.log(`Hallo, ${myPromptName}, Wie Geht's?`);

//Exercise 7
// let numIn = prompt("Enter your number: ");

// for (let i = numIn - 1; i >= 1; i--) {
//     numIn = numIn*i;
// }
// console.log(numIn);