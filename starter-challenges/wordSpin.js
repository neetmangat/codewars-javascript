// website: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// brief:
    // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. 
    // Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
    // Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// solution:
    function spinWords(string){
        var arr = string.split(" ");
        var newarr = []
        
        for (var i=0; i < arr.length; i++) {
        var temparr = []
        
        if (arr[i].length >= 5) {
            let reversed = "";
            for (var j = arr[i].length - 1; j >= 0; j--) {
            reversed += arr[i][j];
            }
            temparr.push(reversed);
        } else {
            temparr.push(arr[i]);
        };
        
        newarr.push(temparr);
        }
        
        return newarr.join(" ");
    }

// test:
    if (
        spinWords("Welcome") === "emocleW" &&
        spinWords("Hey fellow warriors") === "Hey wollef sroirraw" &&
        spinWords("Seriously this is the last one") === "ylsuoireS this is the last one"
    ) {
        console.log("PASSED!! :D");
    } else {
        console.log("FAILED :(");
    };