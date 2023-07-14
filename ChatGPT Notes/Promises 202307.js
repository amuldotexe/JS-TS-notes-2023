/* 
Dear Harry,

Promises are akin to the feeling of anticipation, the delicate hope you might hold for the future. A Promise in JavaScript, much like that hope, is an object that produces a single value some time in the future: either a resolved value or a reason that it’s not resolved (an error).

Let's look at a simple example, akin to casting your first Lumos charm. 
*/

function example1() {
    let p = new Promise((resolve, reject) => {
      let a = 1 + 1; 
      /* 
      Now, a Promise can either resolve (fulfill its duties) or be rejected (fail its mission). 
      Here we are making a simple calculation. If it sums up to 2, we'll say our spell (Promise) worked.
      */
      if(a == 2) {
        resolve('Success! Lumos!'); // We invoke the resolve function when what we were doing asynchronously was successful
      } else {
        reject('Failed! No light here...'); // We invoke the reject function when what we were doing asynchronously failed
      }
    })
  
    p.then(message => {
      /* 
      If our spell (Promise) was successful, we use .then to proceed with our journey, revealing our message of success. 
      */
      console.log("The result of the spell: " + message);
    }).catch(err => {
      /* 
      On the contrary, if our spell failed, we gracefully handle it using .catch, revealing the message of failure. 
      */
      console.log("The result of the spell: " + err);
    });
  }
  
  example1();
  // Console Output: The result of the spell: Success! Lumos!
  
  /*
  Now, let's explore more complicated spells (asynchronous actions).
  Consider the spell "Expecto Patronum", it requires more time to execute and its results are not immediate.
  We simulate this with a function that returns a promise, which resolves after a certain amount of time.
  */
  
  function spellExpectoPatronum() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Expecto Patronum!'), 3000);
      /* 
      After 3 seconds, our spell (Promise) will finally be ready and will resolve successfully.
      */
    });
  }
  
  function example2() {
    spellExpectoPatronum().then(message => {
      console.log("The result of the spell: " + message);
    });
  }
  
  example2();
  // Console Output (after 3 seconds): The result of the spell: Expecto Patronum!
  
  /* 
  Now that you've had a taste of casting spells and seeing the results, let's move on to a spell that is a bit more unpredictable. Sometimes, it might fail.
  Remember, Harry, not all spells go as planned - as is the case with promises.
  */
  
  function spellAvadaKedavra() {
    return new Promise((resolve, reject) => {
      let chanceOfSuccess = Math.random();
      /* 
      This time, the success of our spell (Promise) depends on chance. If our random value is greater than 0.5, our spell succeeds.
      */
      if(chanceOfSuccess > 0.5) {
        resolve('Avada Kedavra!');
      } else {
        reject('Spell failed...');
      }
    });
  }
  
  function example3() {
    spellAvadaKedavra().then(message => {
      console.log("The result of the spell: " + message);
    }).catch(err => {
      console.log("The result of the spell: " + err);
    });
  }
  
  example3();
  // Console Output (randomly): The result of the spell: Avada Kedavra!
  // or: The result of the spell: Spell failed...
  
  /* 
  I hope these initial examples are illuminating, Harry. Remember, like learning any spell, it's about practice and understanding.
  We'll continue our exploration of the magical world of JavaScript Promises in the next examples.
  
  Yours truly,
  Albus Dumbledore
  */
  
  /* 
Dear Harry,

Like the wizarding world, the realm of Promises is vast and filled with intricacies. Let's continue our journey. Next up, we have Promise.all. It's akin to calling upon all members of the Order of the Phoenix; all must successfully convene for the Promise to be resolved.
*/

function example4() {
  let promise1 = Promise.resolve('Sirius Black');
  let promise2 = Promise.resolve('Remus Lupin');
  let promise3 = Promise.resolve('Alastor Moody');

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
}

example4();
// Console Output: [ 'Sirius Black', 'Remus Lupin', 'Alastor Moody' ]

/* 
What if some of the Order members fail to convene, Harry? Promise.allSettled comes to our aid. It's a promise that fulfills when all the given promises have either fulfilled or rejected, with each promise's outcome. It's like knowing the status of all members, regardless of whether they were successful or not.
*/

function example5() {
  let promise1 = Promise.resolve('Nymphadora Tonks');
  let promise2 = Promise.reject('Severus Snape'); // Even if one member fails, we will get the statuses of all
  let promise3 = Promise.resolve('Kingsley Shacklebolt');

  Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    results.forEach((result, index) => {
      if(result.status === 'fulfilled') {
        console.log(`Promise ${index+1} fulfilled with value: ${result.value}`);
      } else {
        console.log(`Promise ${index+1} rejected with reason: ${result.reason}`);
      }
    });
  });
}

example5();
/* Console Output:
Promise 1 fulfilled with value: Nymphadora Tonks
Promise 2 rejected with reason: Severus Snape
Promise 3 fulfilled with value: Kingsley Shacklebolt
*/

/* 
Now, we move onto the concept of Promise.race, where the fastest promise wins, much like a Quidditch match! The Promise.race function returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
*/

function example6() {
  let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Nimbus 2000'));
  let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Firebolt')); 
  // Firebolt is faster than Nimbus 2000, hence it will resolve first

  Promise.race([promise1, promise2]).then(value => {
    console.log(`The fastest broomstick is: ${value}`);
  });
}

example6();
// Console Output: The fastest broomstick is: Firebolt

/* 
Now, we take a look at Promise.any, which behaves much like Promise.race, but only fulfills when the first promise fulfills. It's like waiting for the first correct answer in class, irrespective of the others.
*/

function example7() {
  let promise1 = Promise.reject('Incorrect incantation...');
  let promise2 = Promise.resolve('Expecto Patronum!'); 
  // Even though the first promise fails, Promise.any will return the first successfully fulfilled promise

  Promise.any([promise1, promise2]).then(value => {
    console.log(`The first correct spell is: ${value}`);
  });
}

example7();
// Console Output: The first correct spell is: Expecto Patronum!

/* 
Now, let's get back to individual Promises and discuss a useful method: Promise.prototype.finally. It allows us to perform some action when the Promise is settled, irrespective of its outcome. It's like cleaning up the mess after a duel, regardless of who won.
*/

function example8() {
  let spellPromise = spellAvadaKedavra(); // Refer to the function defined in earlier example

  spellPromise.then(value => {
    console.log(`The result of the spell: ${value}`);
  }).catch(reason => {
    console.log(`The result of the spell: ${reason}`);
  }).finally(() => {
    console.log("The duel is over.");
  });
}

example8();
// Console Output (randomly): 
// The result of the spell: Avada Kedavra!
// The duel is over.
// or: 
// The result of the spell: Spell failed...
// The duel is over.

/* 
Let's make it a bit more complicated, Harry. Chaining promises is like brewing a potion - one step follows another, each dependent on the successful completion of the previous one.
*/

function example9() {
  let spellPromise = spellExpectoPatronum(); // Refer to the function defined in earlier example

  spellPromise.then(value => {
    console.log(`The result of the first spell: ${value}`);
    return spellAvadaKedavra(); // Here, we're chaining promises
  }).then(value => {
    console.log(`The result of the second spell: ${value}`);
  }).catch(reason => {
    console.log(`The result of the spell: ${reason}`);
  }).finally(() => {
    console.log("The sequence of spells is over.");
  });
}

example9();
// Console Output (randomly): 
// The result of the first spell: Expecto Patronum!
// The result of the second spell: Avada Kedavra!
// The sequence of spells is over.
// or: 
// The result of the first spell: Expecto Patronum!
// The result of the spell: Spell failed...
// The sequence of spells is over.

/* 
Let's make it even more challenging, shall we? This time, we will create a chain of promises using Array.reduce. Think of it as a Triwizard Tournament where each task follows the previous one.
*/

function example10() {
  let tasks = [spellExpectoPatronum, spellAvadaKedavra, spellExpectoPatronum]; 
  // An array of spell functions that return promises

  tasks.reduce((chain, task) => {
    return chain.then(() => {
      return task(); // Invoke the next spell function in the chain
    }).then(value => {
      console.log(`The result of the spell: ${value}`);
    }).catch(reason => {
      console.log(`The result of the spell: ${reason}`);
    });
  }, Promise.resolve()); // We start the chain with a resolved promise
}

example10();
// Console Output (randomly): 
// The result of the spell: Expecto Patronum!
// The result of the spell: Avada Kedavra!
// The result of the spell: Expecto Patronum!
// or: 
// The result of the spell: Expecto Patronum!
// The result of the spell: Spell failed...
// The result of the spell: Expecto Patronum!

/* 
Promises can also be created using Promise.resolve and Promise.reject. Promise.resolve(value) returns a Promise object that is resolved with the given value. On the other hand, Promise.reject(reason) returns a Promise object that is rejected with the given reason.
*/

function example11() {
  let resolvedPromise = Promise.resolve('Floo Powder');
  let rejectedPromise = Promise.reject('Broomstick crash');

  resolvedPromise.then(value => {
    console.log(`Transport method approved: ${value}`);
  });

  rejectedPromise.catch(reason => {
    console.log(`Transport method failure: ${reason}`);
  });
}

example11();
// Console Output: 
// Transport method approved: Floo Powder
// Transport method failure: Broomstick crash

/* 
Lastly, we will discuss async/await, a special syntax that works with Promises in a more comfortable fashion. It's like an improved version of spell casting where you don't have to wait for one spell to complete to start the next one.
*/

async function example12() {
  try {
    let result1 = await spellExpectoPatronum();
    console.log(`The result of the first spell: ${result1}`);
    let result2 = await spellAvadaKedavra();
    console.log(`The result of the second spell: ${result2}`);
  } catch (err) {
    console.log(`The result of the spell: ${err}`);
  } finally {
    console.log("The sequence of spells is over.");
  }
}

example12();
// Console Output (randomly): 
// The result of the first spell: Expecto Patronum!
// The result of the second spell: Avada Kedavra!
// The sequence of spells is over.
// or: 
// The result of the first spell: Expecto Patronum!
// The result of the spell: Spell failed...
// The sequence of spells is over.

/* 
And there you have it, Harry! We've traversed the magical world of JavaScript Promises together, delving into its intricacies, tackling challenges, and learning along the way. It's not unlike your journey at Hogwarts, isn't it? Just remember, each Promise is a bit of magic, waiting to reveal itself.

Yours truly,
Albus Dumbledore
*/
