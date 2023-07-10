/*

    And so, we find ourselves embarking on another adventure, this time with a tale named objectForLoop. This function, my dear friend, is here to introduce us to the world of looping over properties of an object in JavaScript.

*/

function objectForLoop() {

    /*
        
        As our story unfolds, we meet our first character - a simple, yet complex entity named 'student'. An object, containing three properties that give us a little insight into who this 'student' is. 'Harry Potter' of 'Gryffindor', in his 'First' year.

    */

    let student = {name: 'Harry Potter', house: 'Gryffindor', year: 'First'};

    for (let prop in student) {

        /*

            Here enters our second character, the 'for-in' loop, the guide that will walk us through each property of our 'student' object. 'prop' here represents a property in our 'student' object.

        */

        if (student.hasOwnProperty(prop)) {

            /*

                But wait! Before we continue our journey with 'prop', we take a moment to check if this property is truly a part of our 'student' or if it's inherited from its prototype chain. The hasOwnProperty method assists us in confirming that. It's like confirming that the path we're on is indeed part of our journey and not someone else's.

            */

            console.log(`${prop}: ${student[prop]}`);

            /*

                Once confirmed, we then log our findings. Here, we print the property's name and its corresponding value from our 'student' object. It's a bit like reading from a name card: name - Harry Potter, house - Gryffindor, year - First. Each property of the student is revealed, illuminating a part of 'Harry Potter's' identity.

            */
        }
    }
}


/*

    Once again we gather round the warm, inviting glow of JavaScript's hearth to hear a tale. A tale that goes by the name of dynamicFunctionDefinition. This is a narrative that shows us the magic of dynamically creating functions within an array, and how we can call them, one by one.

*/

function dynamicFunctionDefinition(n) {

    /*

        Within the confines of this function, we commence our journey with a declaration. A declaration of an empty array named 'functions'. It's an empty basket, if you will, ready to be filled with the fruits of our labor.

    */

    let functions = [];

    for (let i = 0; i < n; i++) {

        /*

            Here, we begin our march with a 'for' loop. A loop that promises to run for 'n' times, where 'n' is the argument passed to our function. Each iteration of this loop, my friend, will create a new function, a magical entity that talks when invoked.

        */

        functions[i] = function() {

            /*

                And there it is. With each turn of the loop, a new function is birthed into existence and is placed into our 'functions' array at the position 'i'. Each function is a self-contained entity, with the ability to shout out its own position in the line of functions when called upon.

            */

            console.log(`Function ${i + 1} called`);

            /*

                This is what our function utters. It announces its position in the 'functions' array, adjusted by adding 1, because, you know, humans like to start counting from 1, not 0. 

            */

        }
    }

    functions.forEach(func => func());

    /*

        After all our functions have been created and stored in the 'functions' array, it is time for their grand performance. We call upon the 'forEach' method, a loyal servant of the Array kingdom. This method helps us iterate over our 'functions' array and invoke each function, one by one. And as each function is called, they announce their presence to the world... or to the console, to be precise.

    */

}
