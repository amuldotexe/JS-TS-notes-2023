/*
Table of Contents
=================
1. for loop example
2. logNumbers function
3. 
*/

// 1. for loop example

console.log("1. for loop example");
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// 1. var i = 0; - This is the initialization of the loop. It sets the variable i to 0.
// 2. i < 10; - This is the condition of the loop. It says that the loop will run as long as i is less than 10.
// 3. i++ - This is the increment of the loop. It says that i will increase by 1 each time the loop runs.
// 4. console.log(i); - This is the body of the loop. It says that each time the loop runs, it will log the value of i to the console.

// how to run this file = node 20230611p1.js

// convert the above code into a function that takes in a start value & end value as parameters and logs all the numbers from start to end in the console

function logNumbers(start, end) {
    console.log("2. logNumbers function starts");
    console.log("start: ", start);
    console.log("end: ", end);
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
    }

logNumbers(5, 8);

