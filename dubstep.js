const Test = require('./test.js');

function songDecoder(song){    
    return song.split('WUB').filter(e => {return e !== ''}).join(' ');
}

function beforeRefactor() {
    /* Prior to Refactoring, the solution was:
      const arr = song.split('WUB');
      
      const filtered = arr.filter(e => {
        return e !== ''
      })
      
      for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
      }
      
      const joined = filtered.join(' ');
      console.log(joined);
      
      return joined;
*/
}

// Test Cases
Test.assertEquals(
    songDecoder("AWUBBWUBC"), 
    "A B C",
    "WUB should be replaced by 1 space"
);

Test.assertEquals(
    songDecoder("AWUBWUBWUBBWUBWUBWUBC"), 
    "A B C",
    "multiples WUB should be replaced by only 1 space"
);

Test.assertEquals(
    songDecoder("WUBAWUBBWUBCWUB"), 
    "A B C",
    "heading or trailing spaces should be removed"
);