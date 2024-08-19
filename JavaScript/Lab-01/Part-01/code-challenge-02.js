// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 

const bmiCalc = (mass, height) => mass / (height * height);

const markMass = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = bmiCalc(markMass, markHeight);
const johnBMI = bmiCalc(johnWeight, johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(`Mark has a ${markHigherBMI ? "higher" : "lower or equal"} BMI (${markBMI}) than John (${johnBMI})`);