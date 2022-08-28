// DATA TYPE*****************************************************

let javascriptisFun = true;
console.log(javascriptisFun);

console.log(typeof true);
console.log(typeof javascriptisFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptisFun = 'yes!'; /*no need to put let when reassign an existing variable*/
 console.log(typeof javascriptisFun);

let year;
console.log(year); /* both value and type of the value are undefined */
console.log(typeof year);

year = 1991; /* reassign the same variable so no need let */
console.log(typeof year);

console.log(typeof null); /* type of null is normally undefined, this is a bug that it says object */