
// (In Morgan Freeman's voice)
// Gather around, dear listeners, for the story of ".map", a versatile virtuoso in the symphony of JavaScript.

// Our star performer often appears on stage after an array - the array providing the music sheets, and ".map" playing out each note in turn.
var numbers = [1, 2, 3, 4, 5];

// The melody it plays depends on what we ask of it - its instructions are given by the function we pass inside it.

// We can ask it to perform simple transformations. Here, it doubles each number.
var doubles = numbers.map(number => number * 2);
// Now, "doubles" would hold [2, 4, 6, 8, 10].

// Or, we could ask for something a bit more elaborate. Here, it's creating objects with number and their square.
var squares = numbers.map(number => ({ value: number, square: number * number }));
// "squares" now holds an array of objects like [{value: 1, square: 1}, {value: 2, square: 4}...]

// It can even interact with functions outside its world. For example, a simple function that checks if a number is even.
var isEven = num => num % 2 === 0;
var evens = numbers.map(isEven);
// "evens" holds [false, true, false, true, false] - the truth of whether each number is even.

// My friends, ".map" is a tool that empowers you to craft with arrays, to shape each element and produce a transformed array. 
// The possibilities, as is often the case with JavaScript, are limited only by your imagination.

// (In the calming and inviting voice of Morgan Freeman)

// Gather round, friends, for today we delve deeper into the artisan's toolkit, 
// into the mastery of ".map", a remarkable maestro of transformation in JavaScript.

// Let us start simple. We have an array of numbers.
var numbers = [1, 2, 3, 4, 5];

// Our first composition. We'll ask ".map" to double each number in our array.
var doubles = numbers.map(num => num * 2);
// Now, "doubles" sings the tune of [2, 4, 6, 8, 10].

// Progressing, let's craft some objects. For each number, ".map" creates an object with the number and its square.
var squares = numbers.map(num => ({ value: num, square: num * num }));
// "squares" holds tales like [{value: 1, square: 1}, {value: 2, square: 4}...].

// Venturing beyond our numbers, let's look at an array of words.
var words = ['apple', 'banana', 'cherry'];

// Let's use ".map" to weave some magic, transforming each word into its length.
var wordLengths = words.map(word => word.length);
// "wordLengths" whispers [5, 6, 6].

// Stepping into more complex territory, we've an array of objects - each a story of a fruit and its count.
var fruitBasket = [{ fruit: 'apple', count: 5 }, { fruit: 'banana', count: 3 }, { fruit: 'cherry', count: 8 }];

// With ".map", we can sing just the counts of our fruits.
var counts = fruitBasket.map(fruitStory => fruitStory.count);
// "counts" sings the melody of [5, 3, 8].

// And for the finale, a grand performance. Let's take our fruitBasket but sing a different song - 
// a tale of each fruit and whether its count is more than 5.
var fruitCheck = fruitBasket.map(({ fruit, count }) => ({ fruit, isCountMoreThanFive: count > 5 }));
// "fruitCheck" holds epic tales like 
// [{fruit: 'apple', isCountMoreThanFive: false}, {fruit: 'banana', isCountMoreThanFive: false}, {fruit: 'cherry', isCountMoreThanFive: true}]

// And so, we find ourselves at the end of our journey today, having seen the transformational tales ".map" can spin.
// It is a tool of versatility, a symbol of JavaScript's power and flexibility, always ready to aid us in our data crafting adventures.

// (In Morgan Freeman's calming voice)
// Welcome back, dear listener. Today we embark on a journey through the fascinating landscapes of advanced ".map" usage.

// Let's imagine we have a collection of items with nested properties, a small town of residents, if you will.
var residents = [{ name: 'John', address: { city: 'San Francisco', country: 'USA' }}, { name: 'Paul', address: { city: 'London', country: 'UK' }}];

// Using ".map", we can send a postcard home, retrieving the country of each resident.
var countries = residents.map(resident => resident.address.country);
// Now, "countries" holds ['USA', 'UK'].

// Going deeper, let's have an array of functions, each ready to perform their role when called upon.
var functions = [Math.sin, Math.cos, Math.tan];

// We can use ".map" to apply a number to all these functions, like a maestro guiding an orchestra to perform the same note.
var results = functions.map(func => func(Math.PI / 2));
// "results" holds [1, 6.123233995736766e-17, 16331239353195370] - the sine, cosine, and tangent of PI/2.

// Let's venture into asynchronous territory with a list of URLs.
var urls = ['https://api.example.com/posts', 'https://api.example.com/comments'];

// We can use ".map" with async functions to fetch data from these URLs. 
// Note: This operation returns an array of Promises, further handling needed with Promise.all.
var data = urls.map(async url => {
  var response = await fetch(url);
  return response.json();
});

// Stepping into a realm where functions generate functions, let's craft an array of greeting functions.
var greetings = ['Hello', 'Hi', 'Hey'].map(greeting => {
  return name => `${greeting}, ${name}!`; // Returns a new function that greets a given name.
});

// Now, invoking greetings[0]('John') would give us 'Hello, John!'.

// Lastly, let's weave some magic with arrays within arrays.
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// We can use ".map" to transpose our matrix, swapping rows with columns.
var transpose = matrix[0].map((_, i) => matrix.map(row => row[i]));
// "transpose" now holds [[1, 4, 7], [2, 5, 8], [3, 6, 9]].

// There you have it, a variety of tales from the land of ".map", tales of transformation, tales of creation, 
// and even tales that venture into the realms of the asynchronous. 
// It's a testament to the power and versatility of JavaScript and the creative potential it offers you.
