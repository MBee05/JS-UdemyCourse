'use strict'; //use at the beginning of your script_ 1_script mode forbid us to do certain things_2_it create visible error in developper console where in other script it will fail silently. EX.



// let hasDriversLicence =  false;
// const passTest = true;

// if (passTest) hasDriverLicence = true; //there is a mistake in the name of the variable missing 's' in driver. out put (hasDriverLicence is not defined - at script.js:6:32) but without 'use strict' error won't show in the console.

// if (hasDriversLicence) console.log('I can drive');


// const interface = 'Audio'; 
// const private = 456; 
// const if = 44 // these won't work bcz might in future smthg called 'Audio' or 'private' so strict mode reserve this words so that we can't use it for variable.

//**********CALLING A FUNCTION INSIDE A FUNCTION: DATA FLOW
// piece of code that we can reuse over and over again in our code. REMEMBER Variable hold a value  but a function can hold 1 or more complete lines of code. this very important
// principle for writing don't repeat yourself or dry means "we shpuld keep our code dry, not repeatition "*//

// function logger() { //here no parameter
// console.log("my names is jonas"); //here it doesn't return anything, it just log somthing to the log and it doesn't return a value.
// }  //function body. This function will be reused multiple times in the script and also can receive data and return data back

// logger(); // invoking, calling, running the function 
// logger();
// logger();
//                             //parameters
// function fruitProccessor(apples, oranges) {
// const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // juice string here 
// return juice; // we return that value from the function,meaning that the result that we call down in the string 'applejuice' is where we store the value of 'juice' value.
// }
//                                      
// const appleJuice = fruitProccessor(5, 0); 
// // console.log(appleJuice); // and we log that value to console.                         //arguments
// console.log(fruitProccessor(5, 0));

// const appleOrangeJuice= fruitProccessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');


// *****************Function declarations VS expressions*****
//JS we have diff way to call a function


// FUNCTION DECLARATION

function calcAge1(birthYear) {
    // const age = 2037 - birthYear; 
    // return age;         // we can this way to return or we remove this line and the  above string and just write as folow
    return 2037 - birthYear;
}
        //argument
const age1 = calcAge1(1991);
// console.log(age1);


// FUNCTION EXPRESSION
// works in the same way as function declaration

const calcAge2 = function(birthYear) { // function without name and we call it anonymous
return 2037 - birthYear;
}
// expression produce value, function is value we can store it in a variable
const age2 = calcAge2(1991);
console.log(age1, age2);


// what is the big diff btw function declaration and function expression main function declaration can be called before its defined whereas in expressionwe can't call it b4 define it.

//Exemple

const age3 = calcAge3(1991);
function calcAge3(birthYear) {
    return 2037 - birthYear;
}
console.log(age3, age1, age2);

// which is best = it dependant of the dev but have to know both ways



//*********Arrow function */
// this variable                 //value that we assign to 
 const calcAge5 = birthYear => 2037 - birthYear; // easier to write, no need to write the return

 const age5 = calcAge5(1991);
 console.log(age5);



                                //one parameter "birthYear"
//  const yearsUntilRetirment = birthYear => {
    
            // more than one parameter have to put parantheses
const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`; 
 }

 console.log(yearsUntilRetirment(1991, 'jonas'));
 console.log(yearsUntilRetirment(1988, 'max'));



//********CALLING A FUNCTION INSIDE A FUNCTION:** **/

function cutFruitPieces(fruit) {
    return fruit = 4;
};



function fruitProccessor(apples, oranges) {
const applesPieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // juice string here 
    return juice;
}

console.log(fruitProccessor(2, 3));

