'use strict'; //use at the beginning of your script bcz_ 1_script mode forbid us to do certain things_2_it creates visible error in  console while in without it will fail silently. EX.

let hasDriversLicence =  false;
const passTest = true;

if (passTest) hasDriverLicence = true; //error in the name of the variable missing 's' in driver. out put (hasDriverLicence is not defined - at script.js:6:32) but without 'use strict' wil be ignored in the console.

if (hasDriversLicence) console.log('I can drive');


// const interface = 'Audio'; 
// const private = 456; 
// const if = 44; // these won't work bcz might in future smthg called 'Audio' or 'private' so strict mode reserve this words so that we can't use it for variable.
