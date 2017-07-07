 //create a NxN spiral with a given size.

var spiralize = function(size) {
    var arr = [];
    //create array
    for (var i = 0; i < size; i++){
        var newArr = [];
        for (var j = 0; j < size;j++){
            newArr.push(0);
        }
        arr.push(newArr);
    }
    writeCount = 0;
    //traverse across the matrix
    function right(thisArr, col, row){
        if (writeCount < size){ 
            writeCount++;
            for(var i = col; i < size; i++){
                if(i == size - 1 || thisArr[row][i + 2] === 1){
                    thisArr[row][i] = 1;
                    down(thisArr, i, row);
                    i = size;
                } else {
                    thisArr[row][i] = 1;
                } 
            }
        }     
    }
    function down(thisArr, col, row){
        writeCount++;
        if (writeCount < size){ 
            
            for(var i = row; i < size; i++){
                if(i == col){
                    thisArr[row][i] = 1;
                    left(thisArr, col, i);
                    i = size;
                } else {
                    thisArr[i][col] = 1;
                } 
            }
        } else if (writeCount == size) {
            thisArr[row + 1][col] = 1;
        }     
    }
    function left(thisArr, col, row){     
        if (writeCount < size){
            writeCount++;
            for(var i = col; i >= 0; i--){
                if(i == 0 || thisArr[row][i - 2] == 1){
                    thisArr[row][i] = 1;                  
                    up(thisArr, i, row);
                    i = 0;
                } else {
                    thisArr[row][i] = 1;
                } 
            } 
        }    
    }
    function up(thisArr, col, row){
        writeCount++;
        if (writeCount < size){ 
            for(var i = row; i >= 0; i--){
                if(thisArr[i - 2][col] == 1){
                    thisArr[row][i] = 1;
                    right(thisArr, col, i);
                    i = 0;
                } else {              
                    thisArr[i][col] = 1;
                } 
            }
        } else if (writeCount == size) {
            thisArr[row - 1][col] = 1;
        }     
    }
    right(arr, 0, 0);
    return arr;  
}
console.log(spiralize(20));