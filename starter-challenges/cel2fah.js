var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celsius: ');
var degreesNum = Number(degrees);

if (isNaN(degreesNum)) {
    console.log('Please provide a valid number.');
} else {
    var degreesFahrenheit = degreesNum * 1.8 + 32;
    console.log('It is ' + degreesFahrenheit + ' degrees Fahrenheit!');
}