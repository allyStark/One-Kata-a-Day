var barN = Number(process.argv[2]);
var barM = Number(process.argv[3]);

function breakBar (n, m){

    return n > 0 && m > 0 ? (n * m) - 1 : 0;

}

console.log(breakBar(barN, barM));