//Day 3
//Exercise 2
var myName = 'Johnny';
console.log(myName);
//Exercise 3
function calculateRectArea(length, width) {
    return length * width;
}
console.log(calculateRectArea(5, 2));
//Exercise 4
var testNum = 16;
testNum % 2 == 0 ? console.log('Even') : console.log('Odd');
//Exercise 6
var myPromptName = prompt("Wie Heißen sie?: ");
myPromptName == null ? alert("Bitte geben Sie Ihren Namen ein") : console.log("Hallo, ".concat(myPromptName, ", Wie Geht's?"));
