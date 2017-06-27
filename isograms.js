//determine whether a string that contains only letters is an isogram (a word that contains no repeating letters).
function check(word){

    word = word.toUpperCase();

    var i = 0;

    while(i < word.length - 1){
   
            if (word.indexOf(word[i], i + 1) !== -1){

                return false;

            }

        i++;

    }

    return true;

}
//test
console.log(check(process.argv[2]));