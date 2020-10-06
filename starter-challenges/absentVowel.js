// website: https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

// brief: 
    // Your job is to figure out the index of which vowel is missing from a given string:
    // A has an index of 0,
    // E has an index of 1,
    // I has an index of 2,
    // O has an index of 3,
    // U has an index of 4.
    // Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// solution:
function absentVowel(x){
    var vowels = ["a", "e", "i", "o", "u"]
    
    var sentarr = Array.from(x);
    
    for (var i = 0; i < sentarr.length; i++)
      if (x.indexOf(vowels[i]) === -1) {
        return i;
      };
  };

// test:
sent1 = "John Doe hs seven red pples under his bsket"
sent2 = "Bb Smith sent us six neatly arranged range bicycles"

if (absentVowel(sent1) === 0 && absentVowel(sent2) === 3) {
    console.log('PASSED!! :D');
} else {
    console.log('FAILED :(');
};

// expect: 0, 3
