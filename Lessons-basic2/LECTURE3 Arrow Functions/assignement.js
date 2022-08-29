
function percentageOfWorld1 (population) {
return (population / 7900) * 100;
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
    };
}
const perCanada = percentageOfWorld1(3801);
const perUK = percentageOfWorld1(6622);
const perFrance = percentageOfWorld1(6739);

// console.log(perCanada, perUK, perFrance);

// ****************Lecture Arrow Functions********

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = population => (population / 7900) * 100;

const perCanada1 = percentageOfWorld3(3801);
const perUK1 = percentageOfWorld3(6622);
const perFrance1 = percentageOfWorld3(6739);

console.log(perCanada1, perUK1, perFrance1);
