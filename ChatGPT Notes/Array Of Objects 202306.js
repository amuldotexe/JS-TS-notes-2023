// Define an object with key-value pairs.
var fruitBasket = { apple: 5, banana: 3, orange: 8 };

// Start building the array of objects.
var result = 

  // Get keys from the fruitBasket object.
  Object.keys(fruitBasket)

  // Start mapping each key to a new object.
  .map(fruit => {

    // Create a new, empty object.
    var obj = {};

    // Assign the key-value pair from fruitBasket to the new object.
    obj[fruit] = fruitBasket[fruit];

    // Return the new object.
    return obj;
  });

// "result" now holds an array of individual fruit objects. 
// It would look like this: [{apple: 5}, {banana: 3}, {orange: 8}]
