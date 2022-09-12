// ****LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

//1
const populations = [53, 65, 32, 25];

//2
// console.log(populations.length === 4);

//3

const percentages = [53, 65, 32, 25]
   
    // console.log(percentages);

const population1 = function (percentageOfWorld1){
    return percentageOfWorld1;
}

    const perCanada = percentageOfWorld1(populations[0]);
    const perUK = percentageOfWorld1(populations[1]);
    const perFrance = percentageOfWorld1(populations[2]);
    const perItaly = percentageOfWorld1(populations[3]);

    console.log(perCanada, perUK, perFrance, perItaly);








    