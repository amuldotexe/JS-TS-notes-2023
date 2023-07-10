


/* 
My dear Harry, this first example we're going to discuss is a simple one, a gentle introduction. 
It's an enchanting charm, if you will, that loops from number 1 to 10 and shows each number in console.
Just like you'd swish and flick your wand to cast "Wingardium Leviosa" multiple times, this code block will print each number from 1 to 10.
*/

function simpleForLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
console.log('Results for simpleForLoop():');
simpleForLoop();
/*
Output:
1
2
3
4
5
 */


/*
Oh Harry, sometimes we need to take bigger strides to cover more ground. 
This time, we're still walking from 1 to 10, but in steps of 2. It's much like how you'd navigate a longer distance on your broomstick faster than on foot.
*/

function skipCountForLoop() {
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }
}
console.log('Results for skipCountForLoop():');
skipCountForLoop();
/*
Output:
1
3
5
7
9
 */


/* 
Ah, my dear boy, sometimes you have to move in the opposite direction, much like when you travel back in time with Hermione's Time-Turner. 
In this example, we start from 10 and go to 1, like counting down to a quidditch match's start.
*/

function reverseForLoop() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}
console.log('Results for reverseForLoop():');
reverseForLoop();
/*
Output:
5
4
3
2
1
 */

/* 
Harry, just as every student in Hogwarts is unique, so too can be every step in our journey. 
In this example, we create a loop that will multiply the index by 2 each time, akin to doubling the magic power with each wave of your wand.
*/

function multiplyForLoop() {
    for (let i = 1; i <= 10; i *= 2) {
        console.log(i);
    }
}

console.log('Results for multiplyForLoop():');
multiplyForLoop();
/*
Output:
1
2
4
8
 */


/* 
Finally, Harry, remember that sometimes, like in the Room of Requirement, what you find inside depends on what you need. 
We'll apply a condition inside our for loop this time, creating a new magical loop that only prints odd numbers between 1 and 10.
*/

function conditionalForLoop() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
console.log('Results for conditionalForLoop():');
conditionalForLoop();
/*
Output:
1
3
5
7
9
 */


/*
======================================================================
======================================================================
======================================================================
======================================================================
======================================================================

Medium to Advanced

======================================================================
======================================================================
======================================================================
======================================================================
*/

/* 
Ah, Harry, just as we have people of different houses in Hogwarts, we have different types of loops in JavaScript. 
This time, we're going to delve into a more intriguing loop - the nested loop. 
Imagine it like a room within a room, each having its own characteristics, much like the chambers of secrets.
*/

function nestedForLoop() {
    for (let i = 1; i <= 5; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
        console.log(str);
    }
}

console.log('Results for nestedForLoop():');
nestedForLoop();
/*
Output:
* 
* * 
* * * 
* * * * 
* * * * *
 */


/* 
Harry, sometimes we need to leave the loop in between when we've found what we were looking for, 
much like when you found the Philosopher's Stone inside the Mirror of Erised.
Here we're using a "break" statement to exit the loop when we've found the number 5.
*/

function breakForLoop() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        console.log(i);
    }
}
console.log('Results for breakForLoop():');
breakForLoop();
/*
Output:
1
2
 */

/* 
Now Harry, consider an instance where you don't want to exit the entire loop but just skip a particular step, 
much like ignoring Peeves while you are roaming the hallways of Hogwarts.
Here, we're using a "continue" statement to skip the number 5 and continue with the rest of the loop.
*/

function continueForLoop() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

console.log('Results for continueForLoop():');
continueForLoop();
/*
Output:
1
2
4
5
 */

/* 
Much like a quidditch match, where the sequence of catching the snitch can affect the outcome, 
the order of looping can be vital too. 
Here we will look at an advanced example where we will loop through a 2D array, akin to exploring a Marauder's Map.
*/

function twoDimensionalArrayForLoop() {
    let arr = [[1, 2], [3, 4], [5, 6]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

console.log('Results for twoDimensionalArrayForLoop():');
twoDimensionalArrayForLoop();
/*
Output:
1
2
3
4
5
6
 */

/* 
Lastly Harry, remember that the wizarding world is filled with unknown magic, 
just as JavaScript is filled with unknown features. 
Here we're going to use a for loop to traverse an object's properties, just like exploring the many secrets hidden within the Hogwarts castle.
*/

function objectForLoop() {
    let student = {name: 'Harry Potter', house: 'Gryffindor', year: 'First'};
    for (let prop in student) {
        if (student.hasOwnProperty(prop)) {
            console.log(`${prop}: ${student[prop]}`);
        }
    }
}

console.log('Results for objectForLoop():');
objectForLoop();
/*
Output:
name: Harry Potter
house: Gryffindor
year: First
 */


/*
======================================================================
======================================================================
======================================================================
======================================================================
======================================================================

Advanced to Super-Advanced

======================================================================
======================================================================
======================================================================
======================================================================
*/

/* 
Harry, magic is not just about casting spells, it's also about creating and transforming things. 
In this example, we create a function that uses a for loop to create an array with values from 1 to n, 
much like creating a list of every magical creature you've encountered.
*/

function arrayCreation(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);
}

console.log('Results for arrayCreation(5):');
arrayCreation(5);
/*
Output:
[ 1, 2, 3, 4, 5 ]
 */

/* 
Harry, my boy, understanding the mysteries of magic often requires looking at things from different perspectives.
In this next example, we will be using a for loop in conjunction with the ternary operator. 
Think of it like deciding the best approach to handle a Hippogriff or a dragon.
*/

function ternaryForLoop(n) {
    for (let i = 1; i <= n; i++) {
        let str = i % 2 === 0 ? 'Even' : 'Odd';
        console.log(`Number ${i} is ${str}`);
    }
}

console.log('Results for ternaryForLoop(5):');
ternaryForLoop(5);
/*
Output:
Number 1 is Odd
Number 2 is Even
Number 3 is Odd
Number 4 is Even
Number 5 is Odd
 */

/* 
Remember Harry, it's our choices that show what we truly are, far more than our abilities.
In this next example, we use a loop to process an array and create a new one based on some conditions.
This is similar to selecting the right wizards for your team based on their skills and abilities.
*/

function arrayProcessing(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * 2);
        }
    }
    console.log(newArr);
}
console.log('Results for arrayProcessing([1, 2, 3, -1, -2, -3,4]):');
arrayProcessing([1, 2, 3, -1, -2, -3,4]);
/*
Output:
[ 2, 4, 6, 8 ]
 */

/* 
Harry, remember how we found the Chamber of Secrets?
We had to understand Parseltongue and speak it to open the chamber.
Similarly, in JavaScript, we need to know and use different tools effectively.
In this case, we'll use a for loop to dynamically define and call functions.
*/

function dynamicFunctionDefinition(n) {
    let functions = [];
    for (let i = 0; i < n; i++) {
        functions[i] = function() {
            console.log(`Function ${i + 1} called`);
        }
    }
    functions.forEach(func => func());
}

console.log('Results for dynamicFunctionDefinition(5):');
dynamicFunctionDefinition(5);
/*
Output:
Function 1 called
Function 2 called
Function 3 called
Function 4 called
Function 5 called
 */


/* 
Finally Harry, let's face a more challenging task, similar to the tasks you faced during the Triwizard Tournament.
Here, we are going to sort an array of objects based on a particular property.
This can be compared to sorting the Triwizard champions based on their performances.
*/

function objectArraySorting() {
    let arr = [{name: 'Harry', age: 21}, {name: 'Ron', age: 18}, {name: 'Hermione', age: 19}];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].age > arr[j].age) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

console.log('Results for objectArraySorting():');
objectArraySorting();
/*
Output:
[
  { name: 'Ron', age: 18 },
  { name: 'Hermione', age: 19 },
  { name: 'Harry', age: 21 }
]
 */

/*
======================================================================
======================================================================
======================================================================
======================================================================
======================================================================

Super-Advanced to Exceptional

======================================================================
======================================================================
======================================================================
======================================================================
*/

/* 
Harry, remember how the Marauder's Map shows every corner of Hogwarts? 
In a similar manner, we can use a for loop to dive deep into nested objects, just like exploring hidden rooms and secret passages. 
This deep dive will help us access the innermost properties.
*/

function deepDive(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            deepDive(obj[prop]);
        } else {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

console.log('deepDive results are');
deepDive({a: 1, b: {c: 2, d: {e: 3}}});

/*
Output:
a: 1
c: 2
e: 3

*/

/* 
Ah, the beauty of magic is that it can transform things in miraculous ways, Harry. 
Here, we use a for loop to transform one data structure into another - converting an array of arrays into an object.
Think of it like transforming a common toad into a silver goblet.
*/

function transformArrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    console.log(obj);
}

console.log('transformArrayToObject results are');
transformArrayToObject([['name', 'Harry Potter'], ['house', 'Gryffindor'], ['year', 'First']]);
/*
Output:
{
    name: 'Harry Potter',
    house: 'Gryffindor',
    year: 'First'
}
*/

/* 
Every witch or wizard, Harry, needs to understand the strengths and limitations of their spells. 
The same applies to our for loop - it has its strengths, but it's not always the best tool for the job.
In this example, we use the forEach method, a more modern and convenient way to loop through arrays in many scenarios.
*/

function useForEach(arr) {
    arr.forEach((value, index) => {
        console.log(`Element ${index} is ${value}`);
    });
}

console.log('useForEach results are');
useForEach(['Hogwarts', 'Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']);

/*
Element 0 is Hogwarts
Element 1 is Gryffindor
Element 2 is Hufflepuff
Element 3 is Ravenclaw
Element 4 is Slytherin
 */

/* 
Lastly, Harry, the magic of Transfiguration is not just in changing the appearance of things but their very nature. 
In this final example, we'll use a for loop to transfigure an array, much like Professor McGonagall would transfigure a teapot into a tortoise.
We're mapping an array to a new array where each element is transformed by a function.
*/

function transformArray(arr, transformFunction) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(transformFunction(arr[i]));
    }
    console.log(newArr);
}

console.log('transformArray results are');
transformArray([1, 2, 3, 4, 5], (x) => x * 2);

/*
Output:
[ 2, 4, 6, 8, 10 ]
*/

