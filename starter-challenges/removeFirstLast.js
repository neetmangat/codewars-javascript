// website: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// brief:
    // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
    // You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// solution:
    function removeChar(str){
        arr = Array.from(str);
        shifted = arr.shift();
        popped = arr.pop();
        joined = arr.join("");
        return joined;
    };

// test:
    if (
        removeChar('eloquent') === 'loquen' &&
        removeChar('country') === 'ountr' &&
        removeChar('person') === 'erso' &&
        removeChar('place') === 'lac'
    ) {
        console.log("PASSED!! :)");
    } else {
        console.log("FAILED :(");
    };
    
   
   
