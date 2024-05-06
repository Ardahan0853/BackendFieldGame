const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline')
const {randomizedArray} = require('./Randomized')
const {playerMove} = require('./playerMove')


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

 






class Field {
  constructor(field){
    this.field = field
  }
  printEach() {
    this.field.forEach(item => console.log(item))
  }
  rowsAndColumns(array){
    for(let i = 0; i < array.length; i++){
        const row = array[i]
        const column = row.indexOf('*')
        if(column !== -1){
            return {row: i, column: column}
        }
        
    }
}

  inputFunction(input){
        const {row, column} = this.rowsAndColumns(this.field)
        return playerMove(input, this.field, row, column)
}
}
let myField = new Field(randomizedArray())
myField.printEach()
console.log('Where do want to move? "Up", "Right", "Down", "Left" \n')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.on('line', (input) => {
    const variable = myField.inputFunction(input)
    if(hole === variable){
        console.log('You have fallen into hole try again')
         myField = new Field(randomizedArray())
        
        myField.printEach();
        
        console.log('Where do want to move? "Up", "Right", "Down", "Left" \n')
  }else if(variable === hat){
        console.log('You have won the game')
        process.exit()
  }else{
        
        myField.printEach();
        console.log('Where do want to move? "Up", "Right", "Down", "Left" \n')
    }
    
  });








