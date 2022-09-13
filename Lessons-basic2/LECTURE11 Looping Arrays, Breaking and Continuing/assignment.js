// 1. Let's bring back the 'populations' array from a previous assignment

// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is


const populations = [53, 65, 32, 25];

const percentages2 = [];

const percentageOfWorld4 = function (populations) {
    return (populations / 7900) * 100;
    }; 


// //2    
for(let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld4(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);

// //3
function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
    const percentageOfWorld2 = function (population) {
        return (population / 7900) * 100;
        };
    }
    const perCanada1 = percentageOfWorld1(53);
    const perUK1 = percentageOfWorld1(65);
    const perFrance1 = percentageOfWorld1(32);
    const perSuisse1 = percentageOfWorld1(25);
    

    console.log(perCanada1, perUK1, perFrance1, perSuisse1);
