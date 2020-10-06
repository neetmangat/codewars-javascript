// website: http://www.codewars.com/kata/563319974612f4fa3f0000e0/train/javascript

// brief: 
  // Complete the function that returns the color of the given square on a normal, 8x8 chess board:
  // https://i.imgur.com/aM0oVWW.png

// solution:
function mineColor(file, rank) {
    var x = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var y = [8, 7, 6, 5, 4, 3, 2, 1];
    
    var xside = x.indexOf(file);
    var yside = y.indexOf(rank);
    
    if (xside % 2 === 0 && yside % 2 === 0) {
      return 'white';
    } else if (xside % 2 === 0 && yside % 2 !== 0) {
      return 'black';
    } else if (xside % 2 !== 0 && yside % 2 === 0) {
      return 'black';
    } else if (xside % 2 !== 0 && yside % 2 !== 0) {
      return 'white';
    }
}

// test:
if (mineColor("a", 8) === "white" && 
    mineColor("b", 2) === "black" &&
    mineColor("f", 5) === "white") {
      console.log('PASSED!! :D');
} else {
  console.log('FAILED :(');
};

// expect: white, black, white