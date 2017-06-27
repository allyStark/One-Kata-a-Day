function isSquare(n){

    var answer = Math.sqrt(n);

    return  Number.isInteger(Math.sqrt(n)) ? true : false;

}

console.log(isSquare(process.argv[2]));