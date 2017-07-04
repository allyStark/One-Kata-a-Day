// calculate the number of trailing zeros in a factorial of a given number.
function zeros (n) {

var trailing = 0;

    for(var i = 1; i < n; i++){

        var sum = n / Math.pow(5,i);
    
        if(sum >= 1){
            sum = Math.floor(sum);
            trailing += sum;
        } else {
            return trailing;
        }
    }
    return 0;
}

console.log(zeros(4617));