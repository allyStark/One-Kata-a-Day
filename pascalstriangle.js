//return a flat array representing the values of Pascal's Triangle to the n-th level
function pascalsTriangle(n) {
    var returnArr = [];
    for(var i = 1; i <= n; i++){
        returnArr.push(new Array(i));
    }
    returnArr[0][0] = 1;

    for (var i = 0; i < returnArr.length; i++){
        for (var j = 0; j < i; j++){
            if (j === 0){
                returnArr[i][j] = 1;
                returnArr[i][j + i] = 1;
            } 
            if (i === n - 1){
                return returnArr.reduce(function(a,b){
                    return a.concat(b);
                });
            }
            returnArr[i + 1][j + 1] = returnArr[i][j] + returnArr[i][j + 1];
        }
    }
    return [1];
}

console.log(pascalsTriangle(5));