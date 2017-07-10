//Given a whole integer, return the next smallest number. If the result is negative or starts with a 0, return -1.
function nextSmaller(n) {
    //check if the number is single, contains all the same digits, or is ascending
    n = n.toString();
    arr = n.split("");
    var lowIndex = [-1,0];
    var highIndex = [-1,0]
    //check if digit is larger than previous
    for(var i = arr.length - 1; i > 0; i--){
        if(arr[i - 1] > arr[i]){
            lowIndex[0] = arr[i - 1];
            lowIndex[1] = i - 1;
            i = 0;
        }
    }
    //find highest number that is less than lowIndex
    for(var j = lowIndex[1]; j < arr.length; j++){
    
        if(arr[j] < lowIndex[0] && arr[j] > highIndex[0]){
            highIndex[0] = arr[j];
            highIndex[1] = j;
        }
    }
    arr[highIndex[1]] = lowIndex[0];
    arr[lowIndex[1]] = highIndex[0];
    var sliced = arr.slice(lowIndex[1] + 1, arr.length);
    sliced.sort(function(a,b){
        return b - a;
    });
    arr = arr.slice(0, lowIndex[1] + 1).concat(sliced).join("");
    return Number(arr) < 0 || arr[0] == 0 ? -1 : arr ;
}

console.log(nextSmaller(1017));