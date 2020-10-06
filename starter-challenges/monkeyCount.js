// website: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// brief:
    // You take your son to the forest to see the monkeys. 
    // You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
    // As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// solution:
    function monkeyCount(n) {
        arr = []
        for (var i = 1; i <= n; i++) {
        arr.push(i)
        }
        return arr
    }

// test:
    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }

    if (
        arraysEqual(monkeyCount(5), [ 1, 2, 3, 4, 5 ]) &&
        arraysEqual(monkeyCount(3), [1, 2, 3]) &&
        arraysEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]) &&
        arraysEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) &&
        arraysEqual(monkeyCount(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    ) {
        console.log("PASSED!! :D");
    } else {
        console.log("FAILED :(");
    };