/**/
//For loop so we can walk through the 100 numbers
for (var i = 1; i <= 100; i++) {
  //Temporary variable to hold the message we will log
  var message = "";
  //test for multiples of 3 using the modulo operator (%)
  if (i % 3 == 0) {
    message += "Fizz";
  }
  //test for multiples of 5
  //if the number was a multiple of 3 already will be FizzBuzz, if wasn't a multiple of 3 will be Buzz
  if (i % 5 == 0) {
    message += "Buzz";
  }
  //test for the message still being empty
  if (message == "") {
    //since its empty, throw in our current index
    message = i;
  }
  //log whatever is in the message
  console.log(message);
}
/**/

/**
//Another way to do the same thing:

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz");
    }
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
/**/
