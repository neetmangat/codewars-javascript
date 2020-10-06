const Test = require('./test.js');

const spinWords = str => {
    return str.split(' ').map((word) => {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// Test Cases
Test.assertEquals(spinWords("Welcome"), "emocleW");
Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
Test.assertEquals(spinWords("This is a test"), "This is a test");
Test.assertEquals(spinWords("This is another test"), "This is rehtona test");
Test.assertEquals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
Test.assertEquals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
Test.assertEquals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");