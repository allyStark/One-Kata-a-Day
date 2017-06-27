//check if int is a perfect square
function isSquare(n){

    var answer = Math.sqrt(n);

    return  Number.isInteger(Math.sqrt(n)) ? true : false;

}

console.log(isSquare(25));