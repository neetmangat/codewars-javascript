"use strict";

var _ = {
  join: (array, separator) => {
      var joined
      for (var i = 0; i < array.length; i++) {
          console.log(array[i] + separator);
      }; 
  }
};


const value = _.join(["hello", "goodbye", "today"], ", ");

//console.log(value);