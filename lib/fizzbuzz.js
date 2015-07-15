'use strict';

var fizzbuzz = function(num){
  var answer;

  if(num % 5 === 0 && num % 3 === 0){
    answer = "FizzBuzz";
  } else if(num % 5 == 0) {
    answer = "Buzz";
  } else if(num % 3 == 0) {
    answer = "Fizz";
  } else{
    answer = num;
  }

  return answer;
}