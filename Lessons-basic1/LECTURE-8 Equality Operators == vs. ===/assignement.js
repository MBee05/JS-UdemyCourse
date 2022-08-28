
// LECTURE: Equality Operators: == vs. === *****************
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// 1

const numNeighbours = prompt('How many neighbour countries does your country have?');

// 2  // 3 
console.log(typeof numNeighbours);

if (numNeighbours === 1 ) {
    console.log("only 1 border"); // it doesnt show this value bcz the 1 is consider as str.

} else if (numNeighbours > 1) {
    console.log("More than 1 border");

} else {
    console.log("No borders");
}

// convert numNeighbours to number

if (parseInt(numNeighbours) === 1 ) {
    console.log("only 1 border");

} else if (parseInt(numNeighbours) > 1) {
    console.log("More than 1 border");

} else {
    console.log("No borders");
}

