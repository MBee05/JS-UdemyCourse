// for loop
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }


//while loop: will run while 'this' condition is true

let rep = 1;
while (rep <= 10){
    console.log(`while: Lifting weights repetition ${rep}`);
rep++;
}

// will give you a decimal number
// let dice1 = Math.random() * 6
// console.log(dice1);


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6)
        console.log('Loop is about to end...');
}