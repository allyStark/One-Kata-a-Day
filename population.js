//Find the number of years it takes for this town to surpass a population threshold.
//p0 = towns current population
//percent = growth percentage in a year
//aug = new people arriving in town
//p = people at the end of the year
 
function nbYear(p0, percent, aug, p, count){

        p0 = p0 + p0 * (percent / 100) + aug;
        //if count doesn't exist, create it
        !Number.isInteger(count) ? count = 0 : count = count;

        return p0 >= p ? count : nbYear(p0, percent, aug, p, count + 1) ;

}

var people = 1000;
var percentage = 2.5;
var augment = 500;
var toSurpass = 2000;

console.log(nbYear(people, percentage, augment, toSurpass));