//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
//You don't need to validate the form of the Roman numeral.

function solution(roman){
  
    var numerals = [[1000, "M"],[500, "D"],[100, "C"],[50,"L"],[10,"X"],[5,"V"],[1,"I"]];
    var doubles = [[900, "CM"],[400,"CD"],[90, "XC"],[40,"XL"],[9,"IX"],[4,"IV"]];
    var intSum = 0;
    var i = 0;

    while(i < roman.length){

        for(var j = 0; j < numerals.length; j++){
           
            if (j < doubles.length && roman.substring(i, i + 2) == doubles[j][1]){
                intSum += doubles[j][0];
                j = numerals.length;
                i = i + 2;
            } else if (roman[i] == numerals[j][1]){
                intSum += numerals[j][0];
                j = numerals.length;
                i++;
            }
        }     
    }
}
solution('MMVIII');