// 1. Add a method called 'describe' to the 'myCountry' object. This method
//  will log a string to the console, similar to the string logged in the previous
//  assignment, but this time using the 'this' keyword.
//   2. Call the 'describe' method

//   3. Add a method called 'checkIsland' to the 'myCountry' object. This
//  method will set a new property on the object, called 'isIsland'.
//  'isIsland' will be true if there are no neighbouring countries, and false if
//  there are. Use the ternary operator to set the property.

// const myCountry = {
//     country : 'India',
//     capital : 'New Delhi',
//     language : 'Tamil',
//     population : 67,
//     neighbours : ['Pakistan', 'Nepal', 'Bangladesh'],
//     Island : false,


//     describe: function () {
        
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
// },
    
    
// checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true :
//         false;

//         // Even simpler version (see why this works...)
//         // this.isIsland = !Boolean(this.neighbours.length);
//     }
// };
// console.log(myCountry.describe());
// myCountry.checkIsland();
// console.log(myCountry);

//********************************* */

// const myCountry1 = {
//     country: 'India',
//     capital: 'New Delhi',
//     language: 'Tamil',
//     population: 67,
//     neighbours: [],
//     checkIsland: false,

//     describe: function () {

//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//     },

//     checkIsland: function () {
        // this.isIsland = this.neighbours.length === 0 ? true : false;


            // Even simpler version (see why this works...)
//         this.isIsland = !Boolean(this.neighbours.length);
//     }
// };
// console.log(myCountry1.describe());
// myCountry1.checkIsland();
// console.log(myCountry1);