//Logical and Comparison Operators

/*******************************************************************************
TASK 1:
     In this task, you will be presented with a series of expressions that you need to evaluate and determine if the result is true or false.
 // Have fun! // 😃
********************************************************************************/

const exp1 = 10 >= 10; // TODO: ADD YOUR EVALUATION HERE -- true>

const exp2 = "dog" == "dog"; // TODO: ADD YOUR EVALUATION HERE --true>

const exp3 = true != false; // TODO: ADD YOUR EVALUATION HERE --true>

const exp4 = "10" === 10; // TODO: ADD YOUR EVALUATION HERE --fales>

const exp5 = 5 > 4; // TODO: ADD YOUR EVALUATION HERE --true>

const exp6 = null == undefined; // TODO: ADD YOUR EVALUATION HERE --fales>

const exp7 = "true" == true; // TODO: ADD YOUR EVALUATION HERE -- true>

const exp8 = "false" == false; // TODO: ADD YOUR EVALUATION HERE -- true>

const exp9 = NaN === NaN; // TODO: ADD YOUR EVALUATION HERE -- true>

const exp10 = !false || false; // TODO: ADD YOUR EVALUATION HERE --true>

const exp11 = false && !false; // TODO: ADD YOUR EVALUATION HERE --fales>

const exp12 = "apple" > "pineapple"; // TODO: ADD YOUR EVALUATION HERE --true>

const exp13 = "2" > "12"; // TODO: ADD YOUR EVALUATION HERE --fales>

const exp14 = undefined == null; // TODO: ADD YOUR EVALUATION HERE --true>

const exp15 = undefined === null; // TODO: ADD YOUR EVALUATION HERE --fales>

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


// - Check if num is either less than 5 or greater than 50 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
let numlees = num < 5
console.log(numlees);

// - Check if str is either "apple" or "orange" using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
let stror = "apple"||"orange"
console.log(stror);

// - Check if isHappy value is true using the logical NOT operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
let isHappynot = !isHappy
console.log(isHappynot);

// - Check if num is even and greater than 10 using the logical AND operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
let numeven = num >= 10
console.log(numeven);

// - Check if num is divisible by both 3 and 5 using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW

let numdivisible = num/3 && num/5
console.log(numdivisible);

// - Check if str contains the letter "e". Log the result to the console.
// TODO: ADD YOUR CODE BELOW

console.log(str.search("e"));

// - Check if str starts with "Hakuna". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.startsWith("hakuna"));
// - Check if str ends with "a". Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.endsWith("a"));

// - Check if num is either negative or odd using the logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(num<= -1 || num % 1 );

// - Check if the length of str is greater than num or equal to 40 using logical OR operator. Log the result to the console.
// TODO: ADD YOUR CODE BELOW
console.log(str.length >num|| str.length=== 40 );