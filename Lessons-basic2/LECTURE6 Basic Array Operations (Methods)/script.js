// //*****Basic Array Operations (Methods)******** */

const friends1 = ['Mickael', 'Peter', 'Sam'];

// //add elements
const newLenght = friends1.push('Jay'); //last
console.log(friends1);
console.log(newLenght);

friends1.unshift('John'); //first
console.log(friends1);


// //remove elements

friends1.pop(); //last
console.log(friends1);

const popped = friends1.pop();
console.log(popped);

friends1.shift(); //first
console.log(friends1);

console.log(friends1.indexOf('Steven')); // bcz not in the arrays

console.log(friends1.indexOf('Mickael')); //return value one

console.log(friends1.includes('Steven'));//return 'false'
console.log(friends1.includes('Mickael')); // return 'true'
console.log(friends1.includes('23')); // return 'false' bcz its assign as a string
// console.log(friends1.includes(23)); // return 'true'

if (friends1.includes('peter')) {
    console.log('you have a friend called peter'); // return the log 
}

// ***** Introduction to Objects *

const  jonas = {
    firstName : 'Jonas',
    lastName  : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Mickael', 'Peter', 'Steven']
};

console.log(jonas);
