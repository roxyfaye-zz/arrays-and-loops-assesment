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




// Use the `numbers` array for questions 3 - 8.


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




// 4.
 +// Write a function `getEvens()` that accepts an array
 +// and returns only the even numbers in the array.
 +// A:
 +function sum(num1, num2) {
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers";
  } else {
    result = num1 + num2;
  }
  return result;
}
 +
 +
 +
 +// 5.
 +// Write a function that accepts an array argument
 +// and returns the array reversed
 +// Hint: When looping over the array, start at the last index
 +// and decrement the iterator to zero
 +// A:
 +function avg(num1, num2, num3) {
  var result;

  if (isNaN(num1) || isNaN(num2), isNaN(num3)) {
    result = "Please enter valid numbers";
  } else {
    result = (num1 + num2 + num3) / 3;
  }
  return result;
}


 // 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(string) {
  return string.length;
}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2) {
  var result;

  if (num1 > num2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(name) {
  return "Hello, " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
}

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madLib(pronoun, verb, adjective, noun) {
  return pronoun.charAt(0).toUpperCase() + pronoun.slice(1) + " learned how to " + verb + " today so that my " + adjective + " " + noun + " is now better!";
}
