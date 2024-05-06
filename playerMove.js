const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
    

const playerMove = (input, array, row, column) => {
    
    let rowIndex = array[row].indexOf(pathCharacter)
    
    if(input === 'left'){
        
        if(rowIndex - 1 >= 0){
            
                if(array[row][column - 1] == hole){
                    return hole
                }else if(array[row][column - 1] == hat){
                    return hat
                }
                array[row][column] = array[row][column - 1] 
                array[row][column - 1] = pathCharacter
                
            
        }
        return array[row]
    }else if(input === 'right'){
        
        if(rowIndex + 1 <= 2){
            
                if(array[row][column + 1] == hole){
                    return hole
                }else if(array[row][column + 1] == hat){
                    return hat
                }
                array[row][column] = array[row][column + 1] 
                array[row][column + 1] = pathCharacter
                
            
        }
        return array[row]
    }else if(input === 'up'){

        if(row - 1 >= 0){

            if(array[row - 1][column] == hole){
                return hole
            }else if(array[row - 1][column] == hat){
                return hat
            }
            array[row][column] = array[row - 1][column]
            array[row - 1][column] = pathCharacter
        }
        return array[row]
    }else if(input === 'down'){

        if(row + 1 <= 2){

            if(array[row + 1][column] == hole){
                return hole
            }else if(array[row + 1][column] == hat){
                return hat
            }
            array[row][column] = array[row + 1][column]
            array[row + 1][column] = pathCharacter
        }
        return array[row]
    }
}



module.exports = {playerMove}
