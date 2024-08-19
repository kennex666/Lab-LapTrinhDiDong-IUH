// Coding Challenge #1
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

const bmiCalc = (mass, height) => mass / (height * height);

const markMass = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markHigherBMI = bmiCalc(markMass, markHeight) > bmiCalc(johnWeight, johnHeight)

console.log(`Mark has a ${markHigherBMI ? "higher" : "lower or equal"} BMI than John`);