// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop 
// (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

const populations = [53, 65, 32, 25];
const percentages3 = [];

function percentageOfWorld3(population) {
    return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {

    const perc = percentageOfWorld3(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);