/*******************************************************************************
 Arithmetic Operators
   In these exercises, you will be practicing some basic arithmetic and variable manipulation in JavaScript.
   You will be using the console to log your results and get familiar with different data types in JavaScript.
 Have fun! 😃
 Note: Please make sure to limit the number of decimal places to three for any value that may have more than two decimal places by using the .toFixed() method.
*******************************************************************************/

/*******************************************************************************
Task 1:
   In this task, you will use JavaScript to perform some basic math operations. Follow the steps below to complete the task.
   1. Define variables a, b, c, d, and e.
   2. Set the value of variable a to the result of adding 4 to 6.
   3. Set the value of variable b to the result of multiplying 10 by 5.
   4. Set the value of variable c to the remainder of dividing 17 by 3.
   5. Set the value of variable d to the result of subtracting variable a from variable b.
   6. Set the value of variable e to the sum of variables a, b, c, and d.
   7. Use console.log() to print the value of variable e to the console. (it should result 102.000)
*******************************************************************************/
// TODO: ADD YOUR CODE BELOW
let a = (4 + 6)
console.log(a)

let b = (10 * 5)
console.log(b)

let c = (17 % 3)
console.log(c)

let d = (b - a)
console.log(d)

let e = (a + b + c + d)
console.log(e)
/*******************************************************************************
 Task 2:
   1. Subtract two numbers and log the result to the console.   
   2. Multiply together the values of four odd numbers that come one after the other, and then output the final result to the console.
   3. Calculate the volume of a rectangular prism with dimensions 3x5x7 and log the result to the console (Volume of rectangular is h x w x l).
   4. Declare a variable price and assign it the value 9.99. Declare another variable discount and assign it the value 0.20. Calculate the discounted price and log the result to the console.
   5. Divide two numbers and round the result to the nearest integer before logging it to the console.
*******************************************************************************/
// TODO: ADD YOUR CODE BELOW
let subtraction = (10 - 10)
console.log(subtraction)

let multiplication = (3 * 1 * 5 * 7)
console.log(multiplication)

let volumeOfRectangularPrism = (3 * 5 * 7)
console.log(volumeOfRectangularPrism)

let price = 9.99
let discount = 0.20
let discountedPrice = (price - discount)
console.log(discountedPrice.toFixed(3))

let division = (120/20)
console.log(division.toFixed(3))