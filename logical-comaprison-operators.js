//Logical and Comparison Operators

/*******************************************************************************
TASK 1:
     In this task, you will be presented with a series of expressions that you need to evaluate and determine if the result is true or false.
 // Have fun! // 😃
********************************************************************************/

const exp1 = 10 >= 10; // TODO: ADD YOUR EVALUATION HERE --> 
let x=10;
let y=10;
console.log(x >= y);
const exp2 = "dog" == "dog"; // TODO: ADD YOUR EVALUATION HERE -->
console.log("dog" == "dog");
const exp3 = true != false; // TODO: ADD YOUR EVALUATION HERE -->
console.log(true != false);
const exp4 = "10" === 10; // TODO: ADD YOUR EVALUATION HERE -->
console.log("10" === 10);
const exp5 = 5 > 4; // TODO: ADD YOUR EVALUATION HERE -->
console.log(5 > 4);
const exp6 = null == undefined; // TODO: ADD YOUR EVALUATION HERE -->
console.log(null == undefined);
const exp7 = "true" == true; // TODO: ADD YOUR EVALUATION HERE -->
console.log("true" == true);
const exp8 = "false" == false; // TODO: ADD YOUR EVALUATION HERE -->
console.log("false" == false);
const exp9 = NaN === NaN; // TODO: ADD YOUR EVALUATION HERE -->
console.log(NaN === NaN);
const exp10 = !false || false; // TODO: ADD YOUR EVALUATION HERE -->
console.log(!false || false);
const exp11 = false && !false; // TODO: ADD YOUR EVALUATION HERE -->
console.log(false && !false);
const exp12 = "apple" > "pineapple"; // TODO: ADD YOUR EVALUATION HERE -->
console.log("apple" > "pineapple");
const exp13 = "2" > "12"; // TODO: ADD YOUR EVALUATION HERE -->
console.log("2" > "12");
const exp14 = undefined == null; // TODO: ADD YOUR EVALUATION HERE -->
console.log(undefined == null);
const exp15 = undefined === null; // TODO: ADD YOUR EVALUATION HERE -->
console.log(undefined === null);
/*******************************************************************************
Task 2:
    In the following tasks, you will practice using logical operators in JavaScript, in addition to some strings methods.
// Have fun! // 😃 
********************************************************************************/
const num = 15;
const str = "Hakuna Matata";
const isHappy = false;

// - Check if num is between 10 and 20 (inclusive) using the logical AND operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num >10 && num <20);
// - Check if num is either less than 5 or greater than 50 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num < 5 || num > 50);
// - Check if str is either "apple" or "orange" using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str === "apple" || str === "orange");
// - Check if isHappy value is true using the logical NOT operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(isHappy != false);
// - Check if num is even and greater than 10 using the logical AND operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num ==10 && num > 10 );
// - Check if num is divisible by both 3 and 5 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num % 3 || num % 5 );
// - Check if str contains the letter "e". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num % 3 || num % 5 );
// - Check if str starts with "Hakuna". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.includes("e"));
// - Check if str ends with "a". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.endsWith("a"));
// - Check if num is either negative or odd using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
divBy2= num % 2;
console.log(num < 0 || divBy2 > 0);
// - Check if the length of str is greater than num or equal to 40 using logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.length > num || str.length === 40);