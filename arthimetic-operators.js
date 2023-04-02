/*******************************************************************************
 Arithmetic Operators
 In these exercises, you will be practicing some basic arithmetic and variable manipulation in JavaScript.
 You will be using the console to log your results and get familiar with different data types in JavaScript.
 Have fun! 😃
// Note: Please make sure to limit the number of decimal places to three for any value that may have more than two decimal places by using the .toFixed() method.
*******************************************************************************/

/*******************************************************************************
 // Task 1:
    In this task, you will use JavaScript to perform some basic math operations. Follow the steps below to complete the task.
 *******************************************************************************/
//1. Define variables a, b, c, d, and e.
let a, b, c, d, e;
//2. Set the value of variable a to the result of adding 4 to 6.
a = 4 + 6;
//3. Set the value of variable b to the result of multiplying 10 by 5.
b = 10 * 5;
//4. Set the value of variable c to the remainder of dividing 17 by 3.
c = 17 / 3;
//5. Set the value of variable d to the result of subtracting variable a from variable b.
d = b - a;
//6. Set the value of variable e to the sum of variables a, b, c, and d.
e = a + b + c + d;
//7. Use console.log() to print the value of variable e to the console. (it should result 105.667)
console.log(e.toFixed(3));

/*******************************************************************************/
// Task 2:

//1. Subtract two numbers and log the result to the console.
let subtract = 1 - 3;
console.log(subtract);
//2. Multiply together the values of four odd numbers that come one after the other, and then output the final result to the console.
let firstNum = 1;
let secondNum = firstNum + 2;
let thirdNum = secondNum + 2;
let fourthNum = thirdNum + 2;
let finalResult = firstNum * secondNum * thirdNum * fourthNum;
console.log(finalResult);

//3. Calculate the volume of a rectangular prism with dimensions 3x5x7 and log the result to the console.
let length = 3;
let width = 5;
let height = 7;
let volume = length * width * height;
console.log(volume);

//4. Declare a variable price and assign it the value 9.99. Declare another variable discount and assign it the value 0.20. Calculate the discounted price and log the result to the console.
let price = 9.99;
let discount = 0.2;
let discountedPrice = price * (1 - discount);
console.log(discountedPrice.toFixed(3));

//5. Divide two numbers and round the result to the nearest integer before logging it to the console.
let dividend = 10;
let divisor = 3;
let quotient = Math.round(dividend / divisor);
console.log(quotient);
