//encrypt a string n times by taking every second letter out and placing them at the back of the string
function encrypt(text, n) {
    //input workable?
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
//decrypt the above encryption n times
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
var test = encrypt("Hello there!", 5);
var test2 = decrypt(test, 5);


