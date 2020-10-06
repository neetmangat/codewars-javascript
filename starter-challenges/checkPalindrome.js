// website: https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

// brief:
    // Find the length of the longest substring in the given string s that is the same in reverse.
    // As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
    // If the length of the input string is 0, the return value must be 0.
//

// solution:
    longestPalindrome=function(str1) {

        function checkPalindrome(str2) {
        var rev = str2.split("").reverse().join("");
        return str2 == rev;
        };
    
        var max_length = 0,
        maxp = '';
        
        for(var i=0; i < str1.length; i++) 
        {
        var subs = str1.substr(i, str1.length);
        
        for(var j=subs.length; j>=0; j--) 
        {
            var sub_subs_str = subs.substr(0, j);
            
            if (checkPalindrome(sub_subs_str))
            {
            if (sub_subs_str.length > max_length) 
            {
                max_length = sub_subs_str.length;
                maxp = sub_subs_str;
            }
            }
        }
        }
    
    //  console.log(maxp);
        return max_length;
    
    };

// test:
  if (
    longestPalindrome("a") === 1 &&
    longestPalindrome("aa") === 2 &&
    longestPalindrome("baa baa black sheep") === 2 &&
    longestPalindrome("aab") === 2 &&
    longestPalindrome("baabcd") === 4 &&
    longestPalindrome("baablkj12345432133d") === 9
  ) {
    console.log("PASSED!! :D");
  } else {
    console.log("FAILED :(");
  };