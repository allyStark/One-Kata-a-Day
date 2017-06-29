// create a function that will add numbers together when called in succession.

var add = function(passed){

    var plus = function(num){
        passed += num;
        return plus;
    };
    
    plus.valueOf = function(){
    
        return passed;
    }

    return plus

};
//test
var addThree = add(3)(5)(6);
var loads = addThree(1)
console.log(loads);
