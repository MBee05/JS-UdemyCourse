
// *********statements and expressions*********************
// 3 + 4
// 1991
// true && false && !false  // are expressions

if (23 > 10){
    const str = '23 is bigger';// statement bcz no value produce, and things that end with a semi colon are statement
}

const me = 'jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

// *******************The Conditional (Ternary) Operator****
// operator always produce a value

// condition ? true : false


const age = 18; // bcz age is 23
age >= 18 ? console.log("i like to drink wine") :
console.log("i like to drink water");


// // this condition is instead of IF ELSE, here you can declare a variabe inside of the ternar statement while in IF ELSE have to declare outside of it

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);  


// //*******************************//


let drink2; // variable is declared outside the IF ELSE stat.

if (age >= 18) {
    drink2 = 'wine';

}else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}` );

