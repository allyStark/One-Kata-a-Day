function spinWords(phrase){

    return phrase.split(" ").map(function(word){

        return word.length > 4 ? word.split("").reverse().join("") : word;

    }).join(" ");

}

console.log(spinWords("Hey fellow warriors"));