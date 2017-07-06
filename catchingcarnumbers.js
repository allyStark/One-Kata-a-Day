//Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads
//mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

//It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if 
//the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

function isInteresting(number, awesomePhrases) {
    //is the number long enough
    var returnVal = 0;
    var plus2 = number + 2;
    var plus1 = number + 1;
    if (number < 98){
        return 0;
    } else if (number < 100){
        number = -1;
    }
    //does it match the awesome phrases?
    for (var i = 0; i < awesomePhrases.length; i++){
        if (number == awesomePhrases[i]){
            return 2;
        } else if (plus2 == awesomePhrases[i] || plus1 == awesomePhrases[i]){
            returnVal = 1;
        }
    }
    //check if it's a number followed by 0's or the same number
    if(/^\d{1}0{2,}$|^([0-9])\1*$/.test(number)){
        return 2;
    } else if (/^\d{1}0{2,}$|^([0-9])\1*$/.test(plus1) || /^\d{1}0{2,}$|^([0-9])\1*$/.test(plus2)){
        returnVal = 1;
    }  
    //is it a palindrome? 
    if (number.toString() === number.toString().split("").reverse().join("")){
        return 2;
    } else if ((plus2).toString() === (plus2).toString().split("").reverse().join("") || (plus1).toString() === (plus1).toString().split("").reverse().join("")){
        returnVal = 1;
    }

    //incrementing or decrementing sequence?
    var charIs = number.toString(); 
    var i = 1;
    var isIncrementing = true;
    plus2 = plus2.toString();
    plus1 = plus1.toString();
    
    while(i < charIs.length){   
        if (i == charIs.length - 1){
                //on last digit check if the plus 1 or 2 works
                if(Number(charIs[i]) - 1 == charIs[i - 1] && isIncrementing || charIs[i] == 0 && charIs[i - 1] == 9 && isIncrementing){
                    return 2;
                } else if (Number(charIs[i]) + 1 == charIs[i - 1] && !isIncrementing){ 
                    return 2;
                } else if (Number(plus2[i]) - 1 == plus2[i - 1] && isIncrementing || plus2[i] == 0 && plus2[i - 1] == 9 && isIncrementing ||
                           Number(plus1[i]) - 1 == plus1[i - 1] && isIncrementing || plus1[i] == 0 && plus1[i - 1] == 9 && isIncrementing ||
                           Number(plus2[i]) + 1 == plus2[i - 1] && !isIncrementing || Number(plus1[i]) + 1 == plus1[i - 1] && !isIncrementing){
                    return 1;
                }
            i++;
        } else if(Number(charIs[i]) - 1 == charIs[i - 1] && isIncrementing || Number(charIs[i]) - 1 == charIs[i - 1] && i === 1){
            i++;
        } else if (Number(charIs[i]) + 1 == charIs[i - 1] && !isIncrementing || Number(charIs[i]) + 1 == charIs[i - 1] && i === 1){
            isIncrementing = false;
            i++;
        } else if (i == charIs.length - 2){
            //check if the last 2 digits work when adding one or two
            if(Number(plus2[i]) - 1 == plus2[i - 1] && plus2[i + 1] == 0 || Number(plus1[i]) - 1 == plus1[i - 1] && plus1[i + 1] == 0 ||
               Number(plus2[i]) + 1 == plus2[i - 1] && plus2[i + 1] == 0 || Number(plus1[i]) + 1 == plus1[i - 1] && plus1[i + 1] == 0){
                return 1;
            }
            i++
        } else {
            return returnVal;
        }   
    }
return returnVal;
}

console.log(isInteresting(120, []));