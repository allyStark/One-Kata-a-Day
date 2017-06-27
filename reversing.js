//reverse words that are longer than 4 characters
function spinWords(phrase){

    return phrase.split(" ").map(function(word){

        return word.length > 4 ? word.split("").reverse().join("") : word;

    }).join(" ");

}

console.log(spinWords("Hey fellow warriors"));