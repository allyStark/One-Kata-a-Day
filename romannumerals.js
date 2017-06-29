//convert an int to roman numerals
function solution(number){

    var numerals = [[1000, "M"],[900, "CM"],[500, "D"],[400,"CD"],[100, "C"],[90, "XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,["IV"]],[1,"I"]];
    var returnStr = "";
    var index = 0;

    while(number !== 0){

        if (number - numerals[index][0] < 0){
            index++;
        } else {
            returnStr += numerals[index][1];
            number -= numerals[index][0];
        }
    }
    return returnStr;
}

console.log(solution(1990));