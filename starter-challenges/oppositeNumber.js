// website: https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

// brief:
    // Very simple, given a number, find its opposite.

// solution:
    function opposite(number) {
        if (number < 0) {
            return Math.abs(number)
        } else {
            return number * -1
        }
    };

// test:
    if (
        opposite(1) === -1 &&
        opposite(14) === -14 &&
        opposite(-34) === 34
    ) {
        console.log("PASSED!! :D");
    } else {
        console.log("FAILED :(");
    };