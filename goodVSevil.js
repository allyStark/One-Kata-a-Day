function goodVsEvil(good, evil){

    good = good.split(" ");
    evil = evil.split(" ");

    var goodVals = [1,2,3,3,4,10];
    var evilVals = [1,2,2,2,3,5,10];
    var battleCount = 0;

    for (var i = 0; i < evilVals.length; i++){

        battleCount += i < evilVals.length - 1 ? goodVals[i] * good[i] : 0;
        battleCount -= evilVals[i] * evil[i];
  
    }

    if (battleCount === 0){

        return "Battle Result: No victor on this battle field";

    } else if (battleCount < 0){

        return 'Battle Result: Evil eradicates all trace of Good';

    } else {

        return 'Battle Result: Good triumphs over Evil';

    }

}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));