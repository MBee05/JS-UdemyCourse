
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


// ******LECTURE: Functions Calling Other Functions********

// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

// 3. Call 'describePopulation' with data for 3 countries of your choice

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
    };

describePopulation('canada',3801);
describePopulation('uk',6622);
describePopulation('france',6739);



