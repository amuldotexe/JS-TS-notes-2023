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
  