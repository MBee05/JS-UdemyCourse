// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
//**********************************************************************************************/
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const marcWeight =  78;
const marcHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const bmiMarc = marcWeight / marcHeight ** 2;
console.log(bmiMarc);

const bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiJohn);

// const bmiJohn = johnWeight / (johnHeight * johnHeight); //answer
// console.log(bmiMarc, bmiJohn);

const markHigherBMI = bmiMarc > bmiJohn;
console.log(bmiMarc, bmiJohn, markHigherBMI);


// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const marcWeight1 = 95;
const marcHeight1 = 1.88;

const johnWeight1 = 85;
const johnHeight1 = 1.76;

const bmiMarc1 = marcWeight1 / marcHeight1 ** 2;
console.log(bmiMarc1);

const bmiJohn1 = johnWeight1 / (johnHeight1 * johnHeight1);
console.log(bmiMarc1, bmiJohn1);

const markHigherBMI1 = bmiMarc1 > bmiJohn1;
console.log(bmiMarc1, bmiJohn1, markHigherBMI1);


// Coding Challenge #2
//*************************************************************************************************/
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// Hint: Use an if/else statement 

const marcWeight2 = 95;
const marcHeight2= 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const bmiMarc2 = marcWeight2 / marcHeight2 ** 2;
console.log(bmiMarc2);

const bmiJohn2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(bmiMarc2, bmiJohn2);

const markHigherBMI2 = bmiMarc2 > bmiJohn2;
console.log(bmiMarc2, bmiJohn2, markHigherBMI2);

const marcWeight3 =  78;
const marcHeight3 = 1.69;

const johnWeight3 = 92;
const johnHeight3 = 1.95;

const bmiMarc3 = marcWeight3 / marcHeight3 ** 2;
console.log(bmiMarc3);

const bmiJohn3 = johnWeight3 / (johnHeight3 * johnHeight3); //answer
console.log(bmiMarc3, bmiJohn3);



if (bmiMarc3 > bmiJohn3){
    console.log(`Marc's BMI is higher than John's!`);
    } else {
    console.log(`John's BMI is higher than Marc's!`);
    }

//***// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!" */

if (bmiMarc3 > bmiJohn3){
console.log(`Marc's BMI (${bmiMarc}) is higher than John's (${bmiJohn})!`);
} else {
console.log(`John's BMI (${bmiJohn}) is higher than Marc's (${bmiMarc})!`);
}

//  CODING CHALLENGE  #3
//*************************************************************************************************/
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)


// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110



const dolphinsScore = 96 + 108 + 89;
const koalasScore   = 88 + 91 + 110;

// // 1
const averageScoreDoplins = dolphinsScore / 3;
const averageScoreKoalas = koalasScore / 3;
console.log(averageScoreDoplins);
console.log(averageScoreKoalas);

// //2
const averageScoreBoth = (averageScoreDoplins + averageScoreKoalas) / 2;
console.log(averageScoreDoplins, averageScoreKoalas, averageScoreBoth);


//Answ
// const dolphinsScoreA = (96 + 108 + 89) / 3;
// const koalasScoreA   = (88 + 91 + 110) / 3;
// console.log(dolphinsScoreA, koalasScoreA);

// if (dolphinsScoreA > koalasScoreA) {
//     console.log('dolphins are winners');
// } else if(koalasScoreA > dolphinsScoreA) {
//     console.log('koalas are winners');
// }else if(dolphinsScoreA === koalasScoreA){
//     console.log("both are winners");
// }


// ******************************************************
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// Test data:
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

const dolphinsScore1 = (97 + 112 + 101) / 3;
const koalasScore1   = (109 + 95 + 123) / 3;
console.log(dolphinsScore1, koalasScore1);


if(dolphinsScore1 >= 100 && dolphinsScore1 > koalasScore1) {
console.log("dolphins are winners!");

} else if ( koalasScore1 >= 100 && koalasScore1 > dolphinsScore1){
console.log("koalas are the winners!");
} else  if(dolphinsScore1 === koalasScore1) {
    console.log("match NULL");
}



// ********************************************************
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2   = (109 + 95 + 106) / 3;

console.log(dolphinsScore2, koalasScore2);


if(dolphinsScore2 >= 100 && dolphinsScore2 > koalasScore2) {
    console.log("dolphins are winners!");n
    
    } else if( koalasScore2 >= 100 && koalasScore2 > dolphinsScore2){
    console.log("koalas are the winners!");

    } else if(dolphinsScore2 === koalasScore2 && dolphinsScore2 >= 100  && koalasScore2 >= 100) {
        console.log("both win");
    
    } else {
        console.log("no one wins the trophy!");
    }


// CODING CHALLENGE #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉


let bill = 430;

const tip = (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+ tip}` );




//ANSWER
// const bill = 430;
// const tip = bill <= 300 && bill >= 50  ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+ tip}`);

// type in console (if bill = 40 or 430) bill <= 300 && bill >= 50  --> false bcz below 50 and false again bcz more than 430.