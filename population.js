var people = Number(process.argv[2]);
var percentage = Number(process.argv[3]);
var augment = Number(process.argv[4]);
var toSurpass = Number(process.argv[5]);

function nbYear(p0, percent, aug, p, count){

        p0 = p0 + p0 * (percent / 100) + aug;
        !Number.isInteger(count) ? count = 0 : count = count;

        return p0 >= p ? count : nbYear(p0, percent, aug, p, count + 1) ;

}

console.log(nbYear(people, percentage, augment, toSurpass));