
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry (country, population, capitalCity){
const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
return result;
}

const info = describeCountry('India', 22, 'New Delhi');
const info1 = describeCountry('UK', 22, 'London');
const info2 = describeCountry('France', 22, 'Paris');


console.log(info,info1,info2);
console.log(info);
console.log(info1);
console.log(info2);
