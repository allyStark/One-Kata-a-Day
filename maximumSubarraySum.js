// find the maximum sum of a contiguous subsequence in an array or list of integers
function maxSequence(arr){
  
    var highestNum = 0;

    for (var i = 0; i < arr.length; i++){

        var sum = arr[i];

        for (var j = i + 1; j < arr.length; j++){

            sum += arr[j];

            if (sum > 0 && sum > highestNum){

                highestNum = sum;

            } else if (arr[j] > highestNum){

                highestNum = arr[j];

            }           

        }

    }

    return Math.round(highestNum);

}

console.log(maxSequence([-2, -5, -9]));