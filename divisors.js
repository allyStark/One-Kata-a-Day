var int = process.argv[2];

function getDivs(num){

    var returnArr = [];

    var returnArr2 = [];

    for (var i = 2; i <= (Math.sqrt(int)); i++){

        if (num % i === 0){

            returnArr.push(i);
            //no duplicates
            if (i * i != int){

            returnArr2.unshift(num / i);

            }

        }

    }

    return returnArr.length === 0 ? int + " is a prime" : returnArr.concat(returnArr2);

}

getDivs(int);