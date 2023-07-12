//Logical and Comparison Operators

/*******************************************************************************
TASK 1:
     In this task, you will be presented with a series of expressions that you need to evaluate and determine if the result is true or false.
 // Have fun! // 😃
********************************************************************************/

const exp1 = 10 >= 10; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp1 + "1");

const exp2 = "dog" == "dog"; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp2 + "2");
const exp3 = true != false; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp3 + "3");
const exp4 = "10" === 10; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp4 + "4");
const exp5 = 5 > 4; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp5 + "5");
const exp6 = null == undefined; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp6 + "6");
const exp7 = "true" == true; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp7 + "7");
const exp8 = "false" == false; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp8 + "8");
const exp9 = NaN === NaN; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp9 + "9");
const exp10 = !false || false; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp10 + "10");
const exp11 = false && !false; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp11 + "11");
const exp12 = "apple" > "pineapple"; // TODO: ADD YOUR EVALUATION HERE --> FALSE
console.log(exp12 + "12");
const exp13 = "2" > "12"; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp13 + "13");
const exp14 = undefined == null; // TODO: ADD YOUR EVALUATION HERE --> TRUE
console.log(exp14 + "14");
const exp15 = undefined === null; // TODO: ADD YOUR EVALUATION HERE -->FALSE
console.log(exp15 + "15");
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
console.log(10 < num && num < 20);
// - Check if num is either less than 5 or greater than 50 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num < 5 || num > 50);
// - Check if str is either "apple" or "orange" using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str == "apple" || str == "orange");
// - Check if isHappy value is true using the logical NOT operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(isHappy != true);
// - Check if num is even and greater than 10 using the logical AND operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num % 2 == 0 && num > 10);
// - Check if num is divisible by both 3 and 5 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num % 3 == 0 || num % 5 == 0);
// - Check if str contains the letter "e". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.includes("r"));
// - Check if str starts with "Hakuna". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.startsWith("Hakuna"));
// - Check if str ends with "a". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.endsWith("a"));
// - Check if num is either negative or odd using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num < 0 || num % 2 !== 0);
// - Check if the length of str is greater than num or equal to 40 using logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
let lengthStr = str.length;
console.log(lengthStr > 40 || lengthStr === 40);
