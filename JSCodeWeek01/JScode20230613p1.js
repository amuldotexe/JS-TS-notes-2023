/*
Table of Contents for this file
=================
1. isAnagram function
2. Spend by category
3. isPalindrome function
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
console.log("isAnagram hello,hlloe:",isAnagram("hello", "hlloe")); // true
console.log("isAnagram hello,hlloee:",isAnagram("hello", "hlloee")); // false
console.log("isAnagram hello,hllof:",isAnagram("hello", "hllof")); // false

/*
I took help from ChatGPT to write this code - this is the chat link 
https://chat.openai.com/share/d9036192-7b76-477e-aecb-31568aa855cd 
*/


/*
2. Spend by category
*/

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

*/

// This is our function, `calculateTotalSpentByCategory`. This function accepts one parameter, `transactions`, which is expected to be a list of transaction objects.
function calculateTotalSpentByCategory(transactions) {
  // Here, we initialize `categoryTotals` as an empty object. 
  // This will eventually store our categories as keys and total spend as values.
  var categoryTotals = {};

  // This is a loop, and for each iteration of the loop, we are taking one transaction from our list of transactions.
  // This loop will continue until we have processed all transactions in the list.
  transactions.forEach(transaction => {
      // For each transaction, we check if the category of that transaction already exists in `categoryTotals`. 
      // If it doesn't exist, we initialize it with a value of 0.
      if (!categoryTotals[transaction.category]) {
          categoryTotals[transaction.category] = 0;
      }

      // Whether or not the category already existed in `categoryTotals`, we add the price of the current transaction to the total for that category.
      categoryTotals[transaction.category] += transaction.price;
  });

  // Now that we have totals for each category, we need to format our result as a list of objects as required.
  // We get the keys (categories) from `categoryTotals` and map each one to a new object.
  var result = Object.keys(categoryTotals).map(category => {
      // Create an empty object
      var obj = {};
      // Add a property to the object with the key set to the category
      // and the value set to the categoryTotals for that category
      obj[category] = categoryTotals[category];
      // Return the object
      return obj;
  });

  return result;
}

/*
Transactions data testing
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
  {
    id: 5,
    timestamp: 1656105600001,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

console.log("calculateTotalSpentByCategory:",calculateTotalSpentByCategory(transactions));

/*
I took help of ChatGPT for this code - link https://chat.openai.com/share/04d9a93f-f0f5-4f90-bf6d-9e5fe83c5f92 

 */

/*
function to check if a string is palindrome or not
*/

// Our isPalindrome function is declared here, it accepts one argument 'str'.
function isPalindrome(str) {
  // Here, we're creating a new variable 'lowerCaseStr' which is the lowercase version of the input string 'str'.
  let lowerCaseStr = str.toLowerCase();
  
  // This line splits 'lowerCaseStr' into an array of characters, reverses the order of the array and then joins the elements back together to form a string.
  // 'reversedStr' is now the reverse of 'lowerCaseStr'.
  let reversedStr = lowerCaseStr.split('').reverse().join('');

  // This line compares 'lowerCaseStr' and 'reversedStr'.
  // If they're the same (which means 'str' is a palindrome), the function returns true.
  // If they're not the same (which means 'str' is not a palindrome), the function returns false.
  return lowerCaseStr === reversedStr;
}

console.log("racecar:",isPalindrome("racecar")); // true
console.log("hello:",isPalindrome("hello")); // true

