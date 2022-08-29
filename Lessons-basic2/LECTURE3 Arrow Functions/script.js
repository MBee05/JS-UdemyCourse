
//*********Arrow function */
// this variable                 //value that we assign to 
 const calcAge5 = birthYear => 2037 - birthYear; // easier way to write, no need curly brases or return key word. 

 const age5 = calcAge5(1991);
 console.log(age5);

                                
            // more than one parameter have to put parantheses
const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`; 
 }

 console.log(yearsUntilRetirment(1991, 'jonas'));
 console.log(yearsUntilRetirment(1988, 'max'));


