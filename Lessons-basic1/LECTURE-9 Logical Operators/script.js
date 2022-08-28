// Boolean logic: AND OR && NOT operator*********************

const hasDriversLicence = true; // A from the pdf
const hasGoodVision = true; // B if false out put 'someone..'

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if(hasDriversLicence && hasGoodVision) {
    console.log("sarah is able to drive!");
} else {
    console.log("someone else should drive...");
}

const isTired = true; //C if false = false
console.log(hasDriversLicence && hasGoodVision && isTired);


if(hasDriversLicence && hasGoodVision && !isTired) { //!isTired = not tired(!=not)
    console.log("sarah is able to drive!");
} else {
    console.log("someone else should drive...");
}

