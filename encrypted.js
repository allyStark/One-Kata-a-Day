function encrypt(text, n) {

    if (n < 1 || text.length < 1){

        return text;

    }

    var arr = text.split("");
    var oddArr = [];
    var evenArr = [];

    for(var i = 0; i < text.length; i++){
        
        i % 2 === 0 ? evenArr.push(text[i]) : oddArr.push(text[i]);

    }
    return n > 1 ? encrypt(oddArr.concat(evenArr).join(""), n - 1) : oddArr.concat(evenArr).join("");

}

function decrypt(encryptedText, n) {

    if (n < 1 || encryptedText.length < 1){

        return encryptedText;

    }

    var returnStr = "";
    var intCalc = Math.floor(encryptedText.length / 2);

    for (var i = 0; i < encryptedText.length / 2; i++){

        if (returnStr.length === newStr.length - 1){
    
            returnStr += newStr[i + intCalc];

        } else {

            returnStr += i + intCalc >= newStr.length ? "" : newStr[i + intCalc];
            returnStr += newStr[i];

        }


    }
 
    return n > 1 ? decrypt(returnStr, n - 1) : returnStr;
}
//test example
var test = encrypt("Hello there!", 0);
var test2 = decrypt(test, 0);


