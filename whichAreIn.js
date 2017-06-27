function inArray(array1,array2){

    var returnArr = array1.filter(function(word){

        for (var i = 0; i < array2.length; i++){
        
           if(array2[i].includes(word)){

                return word;

            }

        } 

    });

    return returnArr.sort();

}
//test examples
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["tarp", "mice", "bull"];

console.log(inArray(a1, a2));