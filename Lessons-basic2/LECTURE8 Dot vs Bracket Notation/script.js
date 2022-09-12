// ***Dot vs. Bracket Notation***

//Getting properties from object in 2 ways.
// ***** Introduction to Objects *

const  jonas = {
    firstName : 'Jonas',
    lastName  : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Mickael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName); //dot notation

console.log(jonas['lastName']); //bracket notation



const interestedIn = prompt('what do you want to know about jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas.interestedIn); //out put 'undefined' bcz it doesnt exit in the object 'interestedIn' so need to use bracket notation bcz we can put any expresssion


console.log(jonas[interestedIn]); // teacher

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! Choose between firstName, lastName, age, job, and friends');
}
 
// //add new properties to an object**********

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// // challenge
// // "jonas has 3 friends, and his best friend is called Mickael"


console.log(`${jonas.firstName} has  ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

