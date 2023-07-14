/*
    Ah, Harry, the map function. It's like a spell that transforms every element in an array, much like Transfiguration, wouldn't you agree?

    The map function in JavaScript is a method that exists on the Array prototype. It allows you to transform every element in an array by applying a function to them, and it returns a new array with the transformed elements.

    Let's start with a slightly more complex example. We have an array of numbers, and we want to create a new array with the squares of these numbers. Here's how we can do that with map.
*/
function example01() {
    let numbers = [1, 2, 3, 4, 5];
    let squares = numbers.map(function(num) {
        return num * num;
    });

    /*
        And there you have it. Our original array, untouched as a secret kept in a Pensieve, and a new array, transformed, like a wizard under a Polyjuice Potion.
    */
    console.log(numbers); // [1, 2, 3, 4, 5]
    console.log(squares); // [1, 4, 9, 16, 25]
}

example01();

/*
    Now, let's say we have an array of strings, and we want to reverse each one. Like a spell that turns things upside down, map can help us achieve this.
*/
function example02() {
    let words = ['hello', 'world'];
    let reversed = words.map(function(word) {
        return word.split('').reverse().join('');
    });

    /*
        And just like that, our words are reversed, as if we've cast a spell to turn them around.
    */
    console.log(words); // ['hello', 'world']
    console.log(reversed); // ['olleh', 'dlrow']
}

example02();

/*
    We can also use map to transform an array of objects. Let's say we have an array of students, and we want to get just their names. Like a Sorting Hat sorting students into houses, map can help us sort out the data.
*/
function example03() {
    let students = [
        { name: 'Harry', house: 'Gryffindor' },
        { name: 'Draco', house: 'Slytherin' },
        { name: 'Luna', house: 'Ravenclaw' }
    ];
    let names = students.map(function(student) {
        return student.name;
    });

    /*
        And there we have it, a list of names, as clear as the Mirror of Erised showing your heart's desire.
    */
    console.log(students); // original array remains unchanged
    console.log(names); // ['Harry', 'Draco', 'Luna']
}

example03();

/*
    Map doesn't just transform values, it can also transform structure. Let's say we have an array of pairs, and we want to turn them into objects. Like a wizard turning a rat into a goblet, map can help us shape our data.
*/
function example04() {
    let pairs = [['name', 'Harry'], ['house', 'Gryffindor']];
    let object = pairs.map(function([key, value]) {
        let obj = {};
        obj[key] = value;
        return obj;
    });

    /*
        And just like that, our pairs have been transformed into objects, each a little charm in our data spell.
    */
    console.log(pairs); // original array remains unchanged
    console.log(object); // [{name: 'Harry'}, {house: 'Gryffindor'}]
}

example04();

/*
    Map can also be used with other array methods for more complex transformations. Let's say we have an array of numbers, and we want to get the square root of each one. Like a wizard calculating the precise measurements for a potion, map can help us calculate.
*/
function example05() {
    let numbers = [1, 4, 9, 16, 25];
    let roots = numbers.map(Math.sqrt);

    /*
        And there you have it, the square roots of our numbers, as precise as the timing of a perfect spell.
    */
    console.log(numbers); // original array remains unchanged
    console.log(roots); // [1, 2, 3, 4, 5]
}

example05();

/*
    Map can also be used with arrow functions for more concise code. Let's say we have an array of numbers, and we want to get the cube of each one. Like a wizard casting a quick charm, map can help us achieve our goal swiftly.
*/
function example06() {
    let numbers = [1, 2, 3, 4, 5];
    let cubes = numbers.map(num => num * num * num);

    /*
        And there you have it, the cubes of our numbers, as neat and tidy as a stack of cauldrons.
    */
    console.log(numbers); // original array remains unchanged
    console.log(cubes); // [1, 8, 27, 64, 125]
}

example06();

/*
    Finally, map can also be used to create complex data structures. Let's say we have an array of names, and we want to create an array of greeting objects. Like a wizard creating a Patronus, map can help us create something beautiful.
*/
function example07() {
    let names = ['Harry', 'Ron', 'Hermione'];
    let greetings = names.map(name => ({ greeting: `Hello, ${name}!` }));

    /*
        And there you have it, a warm welcome for each of our friends, as inviting as a cozy common room.
    */
    console.log(names); // original array remains unchanged
    console.log(greetings); // [{greeting: 'Hello, Harry!'}, {greeting: 'Hello, Ron!'}, {greeting: 'Hello, Hermione!'}]
}

example07();


/*
    Ah, Harry, the map function. It's like a spell that transforms every element in an array, much like Transfiguration, wouldn't you agree?

    The map function in JavaScript is a method that exists on the Array prototype. It allows you to transform every element in an array by applying a function to them, and it returns a new array with the transformed elements.

    Let's start with a more complex example. We have an array of objects, and we want to create a new array with the squares of the ages of these objects. Here's how we can do that with map.
*/
function example08() {
    let students = [
        { name: 'Harry', age: 15 },
        { name: 'Hermione', age: 16 },
        { name: 'Ron', age: 15 }
    ];
    let agesSquared = students.map(function(student) {
        return student.age * student.age;
    });

    /*
        And there you have it. Our original array, untouched as a secret kept in a Pensieve, and a new array, transformed, like a wizard under a Polyjuice Potion.
    */
    console.log(students); // original array remains unchanged
    console.log(agesSquared); // [225, 256, 225]
}

example08();

/*
    Now, let's say we have an array of strings, and we want to create an array of objects with the original string and its length. Like a spell that reveals hidden properties, map can help us achieve this.
*/
function example09() {
    let words = ['Hogwarts', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    let wordObjects = words.map(function(word) {
        return { word: word, length: word.length };
    });

    /*
        And just like that, our words have been transformed into objects, revealing their hidden lengths.
    */
    console.log(words); // ['Hogwarts', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    console.log(wordObjects); // [{word: 'Hogwarts', length: 9}, {word: 'Gryffindor', length: 10}, ...]
}

example09();

/*
    We can also use map to transform an array of objects. Let's say we have an array of students, and we want to get an array of strings with their names and houses. Like a Sorting Hat announcing the houses, map can help us create these strings.
*/
function example10() {
    let students = [
        { name: 'Harry', house: 'Gryffindor' },
        { name: 'Draco', house: 'Slytherin' },
        { name: 'Luna', house: 'Ravenclaw' }
    ];
    let announcements = students.map(function(student) {
        return `${student.name} has been sorted into ${student.house}!`;
    });

    /*
        And there we have it, a list of announcements, as clear as the Mirror of Erised showing your heart's desire.
    */
    console.log(students); // original array remains unchanged
    console.log(announcements); // ['Harry has been sorted into Gryffindor!', 'Draco has been sorted into Slytherin!', 'Luna has been sorted into Ravenclaw!']
}

example10();

/*
    Map doesn't just transform values, it can also transform structure. Let's say we have an array of pairs, and we want to turn them into an object. Like a wizard turning a rat into a goblet, map can help us shape our data.
*/
function example11() {
    let pairs = [['name', 'Harry'], ['house', 'Gryffindor']];
    let object = Object.fromEntries(pairs.map(function([key, value]) {
        return [key, value];
    }));

    /*
        And just like that, our pairs have been transformed into an object, a little charm in our data spell.
    */
    console.log(pairs); // original array remains unchanged
    console.log(object); // {name: 'Harry', house: 'Gryffindor'}
}

example11();

/*
    Map can also be used with other array methods for more complex transformations. Let's say we have an array of numbers, and we want to get the square root of each one, but only if the number is greater than 10. Like a wizard calculating the precise measurements for a potion, map can help us calculate.
*/
function example12() {
    let numbers = [1, 4, 9, 16, 25];
    let roots = numbers.filter(num => num > 10).map(Math.sqrt);

    /*
        And there you have it, the square roots of our numbers greater than 10, as precise as the timing of a perfect spell.
    */
    console.log(numbers); // original array remains unchanged
    console.log(roots); // [4, 5]
}

example12();

/*
    Map can also be used with arrow functions for more concise code. Let's say we have an array of numbers, and we want to get the cube of each one, but only if the cube is less than 100. Like a wizard casting a quick charm, map can help us achieve our goal swiftly.
*/
function example13() {
    let numbers = [1, 2, 3, 4, 5];
    let cubes = numbers.map(num => num * num * num).filter(cube => cube < 100);

    /*
        And there you have it, the cubes of our numbers that are less than 100, as neat and tidy as a stack of cauldrons.
    */
    console.log(numbers); // original array remains unchanged
    console.log(cubes); // [1, 8, 27, 64]
}

example13();

/*
    Finally, map can also be used to create complex data structures. Let's say we have an array of names, and we want to create an array of objects with a greeting and the length of the name. Like a wizard creating a Patronus, map can help us create something beautiful.
*/
function example14() {
    let names = ['Harry', 'Ron', 'Hermione'];
    let greetings = names.map(name => ({ greeting: `Hello, ${name}!`, length: name.length }));

    /*
        And there you have it, a warm welcome for each of our friends, as inviting as a cozy common room.
    */
    console.log(names); // original array remains unchanged
    console.log(greetings); // [{greeting: 'Hello, Harry!', length: 5}, {greeting: 'Hello, Ron!', length: 3}, {greeting: 'Hello, Hermione!', length: 9}]
}

example14();

/*
    Ah, Harry, the map function. It's like a spell that transforms every element in an array, much like Transfiguration, wouldn't you agree?

    The map function in JavaScript is a method that exists on the Array prototype. It allows you to transform every element in an array by applying a function to them, and it returns a new array with the transformed elements.

    Let's start with a more complex example. We have an array of objects, and we want to create a new array with the squares of the ages of these objects, but only if the age is greater than 15. Here's how we can do that with map.
*/
function example1() {
    let students = [
        { name: 'Harry', age: 15 },
        { name: 'Hermione', age: 16 },
        { name: 'Ron', age: 15 }
    ];
    let agesSquared = students
        .filter(student => student.age > 15)
        .map(student => student.age * student.age);

    /*
        And there you have it. Our original array, untouched as a secret kept in a Pensieve, and a new array, transformed, like a wizard under a Polyjuice Potion.
    */
    console.log(students); // original array remains unchanged
    console.log(agesSquared); // [256]
}

example15();

/*
    Now, let's say we have an array of strings, and we want to create an array of objects with the original string and its length, but only if the length is greater than 5. Like a spell that reveals hidden properties, map can help us achieve this.
*/
function example16() {
    let words = ['Hogwarts', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    let wordObjects = words
        .filter(word => word.length > 5)
        .map(word => ({ word: word, length: word.length }));

    /*
        And just like that, our words have been transformed into objects, revealing their hidden lengths.
    */
    console.log(words); // ['Hogwarts', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    console.log(wordObjects); // [{word: 'Hogwarts', length: 9}, {word: 'Gryffindor', length: 10}, ...]
}

example16();

/*
    We can also use map to transform an array of objects. Let's say we have an array of students, and we want to get an array of strings with their names and houses, but only if they are in Gryffindor. Like a Sorting Hat announcing the houses, map can help us create these strings.
*/
function example17() {
    let students = [
        { name: 'Harry', house: 'Gryffindor' },
        { name: 'Draco', house: 'Slytherin' },
        { name: 'Luna', house: 'Ravenclaw' }
    ];
    let announcements = students
        .filter(student => student.house === 'Gryffindor')
        .map(student => `${student.name} has been sorted into ${student.house}!`);

    /*
        And there we have it, a list of announcements, as clear as the Mirror of Erised showing your heart's desire.
    */
    console.log(students); // original array remains unchanged
    console.log(announcements); // ['Harry has been sorted into Gryffindor!']
}

example17();

/*
    Map doesn't just transform values, it can also transform structure. Let's say we have an array of pairs, and we want to turn them into an object. Like a wizard turning a rat into a goblet, map can help us shape our data.
*/

function example18() {

    /*
        Here we have an array of pairs. Each pair is an array itself, containing two elements. It's like a list of magical ingredients for our potion.
    */
    let pairs = [['name', 'Harry'], ['house', 'Gryffindor'], ['age', 15]];

    /*
        Now, we come to the heart of our spell. The 'map' function is like a charm that transforms every element in our array. In this case, it takes each pair and returns it as it is. It might seem like it's not doing much, but it's an essential part of our spell, as it allows us to use the 'Object.fromEntries' function next.
    */
    let object = Object.fromEntries(pairs.map(function([key, value]) {

        /*
            Here, we're using a feature of JavaScript called destructuring to get the first and second elements of our pair and assign them to the variables 'key' and 'value'. It's like separating the yolk from the egg, a crucial step in many potions.
        */
        return [key, value];
    }));

    /*
        The 'Object.fromEntries' function is like the final wave of our wand. It takes our transformed array and turns it into an object. Each pair in our array becomes a property of our object, with the first element of the pair as the property name (or key) and the second element as the property value.
    */

    /*
        And there you have it, our spell is complete. We started with an array of pairs, and we've transformed it into an object. Like turning a rat into a goblet, we've reshaped our data into a more useful form.
    */
    console.log(pairs); // original array remains unchanged
    console.log(object); // {name: 'Harry', house: 'Gryffindor', age: 15}
}

example18();

/*
    Map can also be used with other array methods for more complex transformations. Let's say we have an array of numbers, and we want to get the square root of each one, but only if the number is greater than 10. Like a wizard calculating the precise measurements for a potion, map can help us calculate.
*/
function example19() {
    let numbers = [1, 4, 9, 16, 25];
    let roots = numbers.filter(num => num > 10).map(Math.sqrt);

    /*
        And there you have it, the square roots of our numbers greater than 10, as precise as the timing of a perfect spell.
    */
    console.log(numbers); // original array remains unchanged
    console.log(roots); // [4, 5]
}

example19();

/*
    Map can also be used with arrow functions for more concise code. Let's say we have an array of numbers, and we want to get the cube of each one, but only if the cube is less than 100. Like a wizard casting a quick charm, map can help us achieve our goal swiftly.
*/
function example20() {
    let numbers = [1, 2, 3, 4, 5];
    let cubes = numbers.map(num => num * num * num).filter(cube => cube < 100);

    /*
        And there you have it, the cubes of our numbers that are less than 100, as neat and tidy as a stack of cauldrons.
    */
    console.log(numbers); // original array remains unchanged
    console.log(cubes); // [1, 8, 27, 64]
}

example20();

/*
    Finally, map can also be used to create complex data structures. Let's say we have an array of names, and we want to create an array of objects with a greeting and the length of the name. Like a wizard creating a Patronus, map can help us create something beautiful.
*/
function example21() {
    let names = ['Harry', 'Ron', 'Hermione'];
    let greetings = names.map(name => ({ greeting: `Hello, ${name}!`, length: name.length }));

    /*
        And there you have it, a warm welcome for each of our friends, as inviting as a cozy common room.
    */
    console.log(names); // original array remains unchanged
    console.log(greetings); // [{greeting: 'Hello, Harry!', length: 5}, {greeting: 'Hello, Ron!', length: 3}, {greeting: 'Hello, Hermione!', length: 9}]
}

example21();
