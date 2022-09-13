const jonas = [
        'Jonas',
        'Schmedman',
        2037 - 1991,
        'teacher',
        ['Mickael', 'Peter', 'Steven'],
        true // it wont print bcz we set the loop un to 5
    ];
    
    const types = [];
    
    // //console.log(jonas[0])
    // //console.log(jonas[1])
    // //console.log(jonas[2])
    // //console.log(jonas[3])
    // //console.log(jonas[4])
    // //jonas[5] does not exist
    
    for (let i = 0; i < 5; i++) {
    
        console.log(jonas[i]);
    }
    
    //to make it print, we can add length
    for (let i = 0; i < jonas.length; i++) {
        console.log(jonas[i]);
    
    //     //reading from jonas array
        console.log(jonas[i], typeof jonas[i]);
    
    
    //     //filling a types array
        types[i] = typeof jonas[i];
    
    //     //to add at the end of array
        types.push(typeof jonas[i]);
    }
    
    console.log(types);
    
    
    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    
    for (let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }
    
    console.log(ages);
    
    //continue and break
    console.log('---only string---')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] !== 'string') continue;
    
    
        console.log(jonas[i], typeof jonas[i]);
    }
    
    
    console.log('---break with number---')
    for (let i = 0; i < jonas.length; i++) {
        if (typeof jonas[i] !== 'number') continue;
    
        console.log(jonas[i], typeof jonas[i]);
}