// website: https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

// brief:
  // Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
  // and returns the same string with all even indexed characters in each word upper cased, 
  // and all odd indexed characters in each word lower cased. 
  // The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

  // The passed in string will only consist of alphabetical characters and spaces(' '). 
  // Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// solution:
  function toWeirdCase(string){
    var arr = string.split(" ")
    var newarr = [];
    var finalarr = []
    
    for (var i = 0; i < arr.length; i++){
      var temp = arr[i].split("");    

      for (var j = 0; j < temp.length; j++){
        if (j % 2 === 0) {
          temp[j] = temp[j].toUpperCase();
        } else {
          temp[j] = temp[j].toLowerCase();
        };
      };
      
      newarr.push(temp);
    };
    
    for (i = 0; i < newarr.length; i++){
      finalarr.push(newarr[i].join(""));
    };
    
    return finalarr.join(" ");    
  };

// test:
  if (
    toWeirdCase('This') === 'ThIs' &&
    toWeirdCase('is') === 'Is' &&
    toWeirdCase('This is a test') === 'ThIs Is A TeSt' &&
    toWeirdCase('Looks like you passed') === 'LoOkS LiKe YoU PaSsEd'
  ) {
    console.log("PASSED!! :D");
  } else {
    console.log("FAILED :(");
  }