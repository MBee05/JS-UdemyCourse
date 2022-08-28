// SWITCH statement*****************************************

 const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday' then execute code if not put the BREAK code will continue until next BREAK
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare vid');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record vid');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy week end');
        break;
    default:
        console.log('not a valid day!');
}

// // ***************IF ELSE********************************

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');

} else if (day === 'tuesday') {
    console.log('prepare vid');


} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');

} else if (day === 'friday') {
    console.log('record vid');


} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy week end');

} else {
    console.log('not a valid day!');
}


