//**********CALLING A FUNCTION INSIDE A FUNCTION: DATA FLOW
// piece of code that we can reuse over and over again in our script. REMEMBER Variable hold a value  but a function can hold 1 or more complete lines of code. 
// Principle for writing don't repeat yourself or dry means "we shpuld keep our code dry, not repeatition "*//

// function logger() { //here no parameter
// console.log("my names is jonas"); //here it doesn't return anything, it just log somthing to the log and it doesn't return a value.
// }  //function body. This function will be reused multiple times in the script and also can receive data and return data back

// logger(); // invoking, calling, running the function 
// logger();
// logger();
                            
// function fruitProccessor(apples, oranges) {
// const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // juice string here 
// return juice; // we return that value from the function,meaning that the result that we call down in the string 'applejuice' is where we store the value of 'juice' value.
// }
                                     
// const appleJuice = fruitProccessor(5, 0); 
// console.log(appleJuice);   //or the following   
// console.log(fruitProccessor(5, 0));

// const appleOrangeJuice= fruitProccessor(2, 4);
// console.log(appleOrangeJuice);



// / *************Function declarations VS expressions*****
//JS has diff way to call a function


// FUNCTION DECLARATION

function calcAge1(birthYear) {
    // const age = 2037 - birthYear; 
    // return age;         // we can this way to return or we remove these 2 lines above and just write as folow
    return 2037 - birthYear;
}
        //argument
const age1 = calcAge1(1991);
console.log(age1);


// // FUNCTION EXPRESSION
// // works in the same way as function declaration

const calcAge2 = function(birthYear) { // function without name and we call it anonymous
return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// what is the big diff btw function declaration and function expression?  function declaration can be called before its defined whereas in expression we can't call it without defining.

// //Example

const age3 = calcAge3(1991);
function calcAge3(birthYear) {
    return 2037 - birthYear;
}
console.log(age3, age1, age2);

