function area(length,width){
    return length * width;

}
// Export the function
module.exports = area

//import the Area Function

const calculateArea = require('./rectangle');

// Use the function
const length = 5;
const width = 10;
const result = calculateArea(length, width);

console.log(`The Area of the rectanglr is ${result}`);