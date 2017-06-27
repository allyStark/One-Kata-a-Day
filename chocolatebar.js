var barN = Number(process.argv[2]);
var barM = Number(process.argv[3]);

//count how many times you need to break a chocolate bar for it to be split into individual pieces
function breakBar (n, m){

    return n > 0 && m > 0 ? (n * m) - 1 : 0;

}
//example
console.log(breakBar(3, 3));