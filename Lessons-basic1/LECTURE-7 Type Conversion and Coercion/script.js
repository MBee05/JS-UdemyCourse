// Type conversion *********************************

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); //invalid number

console.log(String(23), 23); //if value is in white means is a string

// // Type coercion***********************************
console.log('I am ' + 23 + ' years old'); // when there is a mixing string and number jstype coercion will convert number into a string

console.log('I am ' + '23' + 'years old'); // both console means the same.

console.log('23' - '10' - 3); //minus make convert the string into number
console.log('23' + '10' + 3); //adding sign will make the 3 convert into a string and they are concatenate.

console.log('23' * '2');

let n = '1' + 1; // = '11'
n = n - 1;      // = 11 - 1 = 10
console.log(n);

