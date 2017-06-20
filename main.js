// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming'); A:console.log(sports);
  console.log(total);
  sports = ['soccer', 'baseball', 'football', 'swimming'];
  total = 4


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
 var strings = ['this','is','a','collection','of','words'];
 var lgth = 0;
 var longest = "";

function longestString(strings) {

  for(var i=0; i < strings.length; i++){

    if(strings[i].length > lgth){
      lgth = strings[i].length;
      longest = strings[i];
    }
  }
  return(longest)
}


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
var smallest = 4000;

 function smallestNumber(numbers) {
  for (var i = 0; i < numbers.length; i++) {
  
     if (numbers[i] < smallest){
      smallest = numbers[i];
    }

    return smallest;
  }
}


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});



