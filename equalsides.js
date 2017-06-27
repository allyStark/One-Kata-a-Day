function findEvenIndex(arr){

var leftSum = 0;

    for (var i = 0; i < arr.length; i++){

    var sum = 0;
        
        for (var j = arr.length - 1; j > i; j--){
  
            sum += arr[j];

        }

         if (leftSum === sum){

                return i;

        }

        leftSum += arr[i];

    }

    return -1;

}

var myArr = [1,2,3,4,3,2,1];

console.log(findEvenIndex(myArr));