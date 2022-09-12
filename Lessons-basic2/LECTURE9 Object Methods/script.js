
// Object Methods********************************


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['mickael', 'peter', 'steven'],
    hasDriversLicense: false,

    //any function that is attached to an object, it is called a "method"

    calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYear;

    }
};

console.log(jonas.calcAge());


//************************************* */

const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['mickael', 'peter', 'steven'],
    hasDriversLicense: false,



    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;

    },


    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`
    }
};

console.log(jonas1.calcAge());
console.log(jonas1.age);


// challenge

//"jonas is a 46 year old teacher, he has a driver's license"


//******************************************* */


const jonas3 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['mickael', 'peter', 'steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;

    },


    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`
    }
};

console.log(jonas3.getSummary());
