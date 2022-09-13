const jonas = [
        'Jonas',
        'Schmedman',
        2037 - 1991,
        'teacher',
        ['Mickael', 'Peter', 'Steven'],
        true
    ];
    
    //Loop Backwards 4, 3, ....0
    
    for (let i = jonas.length - 1; i >= 0; i--) {
        console.log(i, jonas[i]);
    }
    
    //loop inside a loop
    
    for (let exercise = 1; exercise < 4; exercise++) {
        console.log(`-------Starting exercise ${exercise}`);
    
    
        for (let rep = 1; rep < 6; rep++) {
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
        }
    }