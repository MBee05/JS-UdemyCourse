// Equality operators: == vs ===******************************
// const age = "18"; // if we put "18" no out put will be displayed
// if (age === 18) console.log("you just became an adult: D (strict)");
// when code just one line don't need the curly brackets.
// === only true value will be executed = boolean value
// assignement is a single equal while the comparaison is triple equals or db equals, triple equals = strict operator, db equals is loose operator
// ex "18" == 18 out put would be true bcs coercion happened
// triple equals doesnt do the coercion

let age = 15;
if (age == 18) console.log("you just became an adult: D (loose)");

const favorite = prompt("what's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

// if (favorite == 23) { // '23' == 23
//     console.log("cool! 23 is an a cool number!");
// }

if (favorite === 23) { // 22 === 23 --> FALSE
    console.log("cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("why not 23");

