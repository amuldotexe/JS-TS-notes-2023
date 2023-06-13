/*
Table of Contents for this file
=================
1. isAnagram function
2. 
*/




/*
Write a function that takes 2 strings and checks if they are anagrams of each other
Anagrams means the letters of one string can be rearranged to form the other string

This code will have comments explaining each part of the function

*/

function isAnagram(str1, str2) {
    // If lengths are different, they can't be anagrams.
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Split the strings into arrays, sort them, and join them back into strings.
    var s1 = str1.split("").sort().join("");
    var s2 = str2.split("").sort().join("");
  
    // If sorted strings are the same, they are anagrams.
    return s1 === s2;
}

// Test the function
console.log(isAnagram("hello", "hlloe")); // true
console.log(isAnagram("hello", "hlloee")); // false
console.log(isAnagram("hello", "hllof")); // false

/*
I took help from ChatGPT to write this code - this is the chat link 
https://chat.openai.com/share/d9036192-7b76-477e-aecb-31568aa855cd 
*/

