// LECTURE: Dot vs. Bracket Notation*******

// 1. Using the object from the previous assignment, log a string like this to the

// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

const myCountry1 = {
    country : 'India',
    capital : 'New Delhi',
    language : 'Tamil',
    population : 67,
    neighbours : ['Pakistan', 'Nepal', 'Bangladesh'],

    }

//1 
//  console.log(`${myCountry1.country} has ${myCountry1.population} million ${myCountry1.language}-speaking people, ${myCountry1.neighbours.length} neighbouring countries and a capital called ${myCountry1.capital}.`);



//  //2
//  myCountry1.population += 2;
//  console.log(myCountry1.population);

//  myCountry1['population'] -= 2;
//  console.log(myCountry1.population);

