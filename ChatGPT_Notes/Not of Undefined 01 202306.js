/*
(In Morgan Freeman's voice)

My dear friends, today we peer behind the curtain of JavaScript, into a land of conditionals and objects. Let us journey together, examining this piece of code.
*/

if (!categoryTotals[transaction.category]) {

    /*
    Here, we encounter an "if" statement, a fork in the road, if you will. It evaluates the condition within the parentheses. 
    
    Now imagine "categoryTotals" as a library, with "transaction.category" being the title of a book. If that book isn't in our library, "categoryTotals[transaction.category]" returns "undefined", a JavaScript way of saying "I don't have what you're looking for."
    
    The "!" operator then steps in, turning this "undefined" into its opposite, "true". So if the book isn't in our library, the condition within our "if" statement becomes "true", leading us down one path of the fork.
    */
    
        categoryTotals[transaction.category] = 0;
    
    /*
    On this path, we add the missing book to our library, but it's a book with empty pages, represented here as "0". 
    
    Our library is now ready to store information against this book title, waiting for future transactions to fill its pages.
    */
    
    }
    
    /*
    And there you have it. Through the magic of JavaScript, we've ensured our library is always prepared to store data against any book title, even those it's encountering for the first time. A simple piece of code, yet so beautifully powerful.
    */
    