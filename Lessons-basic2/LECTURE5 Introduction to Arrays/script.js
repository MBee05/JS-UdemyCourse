const friend1 = "mickael";
const friend2 = "steven";
const friend3 = "max";
// long structure so instead, we use "data structure" arrays and object

// //1st way
const friends = [ 'Mickael', 'Peter', 'Sam'];
console.log(friends);


// //2nd way
const years = new Array(1991, 1994, 2021, 2022);
console.log(years[0]);
console.log(years[2]);

// // //lenght
console.log(friends.length);
console.log(friends[friends.length - 1]);

// //replace eventhough its a const, why? only primitive value cant be changed but an arrays can be changed

friends[2] = 'Jay';
console.log(friends);

const firstName = ' Jonas';
const jonas = [firstName, 'Schmedman', 2037- 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


 //************************EXERCISE************************

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


// //cant do operation with arrays
const years1 = [1990, 2002, 1967, 2010, 2018];
// console.log(calcAge(years1));

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
// console.log(ages);



