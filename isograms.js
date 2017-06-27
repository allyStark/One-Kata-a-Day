function check(word){

    word = word.toUpperCase();

    var i = 0;

    while(i < word.length - 1){

        for (var j = word.length - 1; j > i; j--){

            if (word[i] === word[j]){

                return false;

            }

        }

        i++;

    }

    return true;

}

console.log(check(process.argv[2]));