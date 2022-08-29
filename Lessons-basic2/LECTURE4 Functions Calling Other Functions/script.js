
//********CALLING A FUNCTION INSIDE A FUNCTION:** **/

function cutFruitPieces(fruit) {
    return fruit * 4;
};



function fruitProccessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice;
}

// console.log(fruitProccessor(2, 3));



function fruitProccessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    
        const juice = `Juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges .`; 
        return juice;
    }
    
    console.log(fruitProccessor(2, 3));