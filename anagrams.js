//find the anagrams in an array of words from a list
function anagrams(word, words) {

var returnArr = [];
var word = word.split("").sort().join("");

    for (var i = 0; i < words.length; i++){
        if (word === words[i].split("").sort().join("")){
            returnArr.push(words[i]);
        }
    }
    return returnArr; 
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));