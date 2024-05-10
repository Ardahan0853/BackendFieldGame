function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomizedArray() {
    const randomArrayZero = 'O';
    
    const randomArrayItems = ['^', '░', '*'];
    const randomizedArray = Array(3).fill().map(() => Array(3).fill(''));

    randomizedArray.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
        const randomIndex = randomNumber(randomArrayItems.length);
        const randomNum = Math.floor(Math.random() * 11);
        if (randomNum > 6 && randomArrayItems[randomIndex] !== '^' && randomArrayItems[randomIndex] !== '*') {
            randomizedArray[rowIndex][colIndex] = randomArrayZero;
        } else {
            randomizedArray[rowIndex][colIndex] = randomArrayItems[randomIndex];
        }
        if (randomArrayItems[randomIndex] === '^') {
            randomArrayItems.splice(randomIndex, 1); 
        } else if (randomArrayItems[randomIndex] === '*') {
            randomArrayItems.splice(randomIndex, 1);
        }
    });
});

    if(randomizedArray.forEach(item => item !== '^')){
        const randomRowIndex = randomNumber(3);
        const randomColIndex = randomNumber(3);
        randomizedArray[randomRowIndex][randomColIndex] = '^';
    }else if(randomizedArray.forEach(item => item !== '*')){
        const randomRowIndex = randomNumber(3);
        const randomColIndex = randomNumber(3);
        randomizedArray[randomRowIndex][randomColIndex] = '*';
    }
    

    return randomizedArray;
}




module.exports = {randomizedArray}
