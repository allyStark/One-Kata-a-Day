//There is one odd or even number in the sequence of numbers. Find it and return it's 'true' index (it's index + 1).
function iqTest(numbers){

    numbers = numbers.split(" ");
    var i = 1;
    
    while(i < numbers.length){
        //if the first bit is on the number is odd
        var a = numbers[i - 1] & 1;
        var b = numbers[i] & 1;
        var c = numbers[i + 1] & 1;
     
        if (a != b && a != c){
            return i;
        } else if (b != a && b != c){
            return i + 1;
        } else if (c != a && c != b){
            return i + 2;
        }
        i > numbers.length - 5 ? i++ : i = i + 3; 
    }
}

console.log(iqTest("2 4 6 8 2 6 4 5"));