/*
(In the voice of Morgan Freeman)

Imagine, if you will, a world where objects and arrays live harmoniously. A world where we can access an object's properties using array notation, a testament to JavaScript's flexibility and unending surprises. Gather around, as we delve deeper into this concept.
*/

// Simple Example 1 - Using array notation to access an object's properties
var myObj = { 'property': 'value' };
console.log(myObj['property']); // Outputs: 'value'

/*
We have an object, "myObj", with a single property called "property". Now, JavaScript allows us to treat this object as if it were an array, accessing its properties by passing the property name as a string into array-like brackets. Marvelous, isn't it?
*/

// Example 2 - When the property name isn't a valid identifier, array notation comes to the rescue
var myObj2 = { 'complex-property': 'complex-value' };
console.log(myObj2['complex-property']); // Outputs: 'complex-value'

/*
Here, we have a property name that isn't a valid JavaScript identifier due to the hyphen. No worries, for array notation is here to save the day, allowing us to access such properties with ease.
*/

// Complex Example 3 - The versatility of array notation allows dynamic property access
var propName = 'dynamic-property';
var myObj3 = { 'dynamic-property': 'dynamic-value' };
console.log(myObj3[propName]); // Outputs: 'dynamic-value'

/*
This shows the real power of array notation. By storing the property name in a variable, we can dynamically access different properties of an object. It's like a magician pulling a rabbit out of a hat, you never know what you're going to get.
*/

// Complex Example 4 - Arrays in JavaScript are indeed a type of object, and this can lead to some interesting situations
var myArr = [1, 2, 3];
console.log(myArr.length); // Outputs: 3
console.log(myArr['length']); // Outputs: 3

/*
A secret few know: in JavaScript, arrays are a type of object. This allows us to access their properties, such as "length", not only with dot notation but with array notation as well. Both lead us to the same destination.
*/

// Very Complex Example 5 - Using array notation and a for-in loop to list all properties of an object
var myObj4 = { a: 1, b: 2, c: 3 };
for (var prop in myObj4) {
  console.log(`Property name: ${prop}, Property value: ${myObj4[prop]}`);
}

/*
In our final example, we combine array notation with a "for-in" loop to traverse our object's properties. A powerful tool in our JavaScript arsenal, letting us iterate over each key in our object, printing both the key and its associated value. A performance to leave any audience in awe.
*/

/*
And so, my friends, you see how arrays and objects, though different, share a common language in JavaScript. They're like two sides of the same coin, with their own unique characteristics yet a shared ability to store and access data, and sometimes, to surprise us in ways we never imagined.
*/

/*
Property name: a, Property value: 1
Property name: b, Property value: 2
Property name: c, Property value: 3
*/