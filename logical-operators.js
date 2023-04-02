//Logical and Comparison Operators

/*******************************************************************************
TASK 1:
     In this task, you will be presented with a series of expressions that you need to evaluate and determine if the result is true or false.
 // Have fun! // 😃
********************************************************************************/

const exp1 = 10 >= 10;
console.log("🚀 ~ file: logical-operators.js:7 ~ exp1:", exp1);
const exp2 = "dog" == "dog";
console.log("🚀 ~ file: logical-operators.js:9 ~ exp2:", exp2);
const exp3 = true != false;
console.log("🚀 ~ file: logical-operators.js:11 ~ exp3:", exp3);
const exp4 = "10" === 10;
console.log("🚀 ~ file: logical-operators.js:13 ~ exp4:", exp4);
const exp5 = 5 > 4;
console.log("🚀 ~ file: logical-operators.js:15 ~ exp5:", exp5);
const exp6 = null == undefined;
console.log("🚀 ~ file: logical-operators.js:17 ~ exp6:", exp6);
const exp7 = "true" == true;
console.log("🚀 ~ file: logical-operators.js:19 ~ exp7:", exp7);
const exp8 = "false" == false;
console.log("🚀 ~ file: logical-operators.js:21 ~ exp8:", exp8);
const exp9 = NaN === NaN;
console.log("🚀 ~ file: logical-operators.js:23 ~ exp9:", exp9);
const exp10 = !false || false;
console.log("🚀 ~ file: logical-operators.js:25 ~ exp10:", exp10);
const exp11 = false && !false;
console.log("🚀 ~ file: logical-operators.js:27 ~ exp11:", exp11);
const exp12 = "apple" > "pineapple";
console.log("🚀 ~ file: logical-operators.js:29 ~ exp12:", exp12);
const exp13 = "2" > "12";
console.log("🚀 ~ file: logical-operators.js:31 ~ exp13:", exp13);
const exp14 = undefined == null;
console.log("🚀 ~ file: logical-operators.js:33 ~ exp14:", exp14);
const exp15 = undefined === null;
console.log("🚀 ~ file: logical-operators.js:35 ~ exp15:", exp15);

/*******************************************************************************
Task 2:
    In the following tasks, you will practice using logical operators in JavaScript, in addition to some strings methods.
// Have fun! // 😃 
********************************************************************************/

const num = 15;
const str = "Hakuna Matata";
const isHappy = false;

// - Check if num is between 10 and 20 (inclusive) using the logical AND operator. Log the result to the console.
console.log(num > 10 && num < 20);
// - Check if num is either less than 5 or greater than 50 using the logical OR operator. Log the result to the console.
console.log(num < 5 || num > 50);
// - Check if str is either "apple" or "orange" using the logical OR operator. Log the result to the console.
console.log(str == "apple" || str == "orange");
// - Check if isHappy value is true using the logical NOT operator. Log the result to the console.
console.log(!isHappy);
// - Check if num is even and greater than 10 using the logical AND operator. Log the result to the console.
console.log(num % 2 == 0 && num > 10);
// - Check if num is divisible by both 3 and 5 using the logical OR operator. Log the result to the console.
console.log(num % 3 == 0 || num % 5 == 0);
// - Check if str contains the letter "e". Log the result to the console.
console.log(str.includes("e"));
// - Check if str starts with "Hakuna". Log the result to the console.
console.log(str.startsWith("Hakuna"));
// - Check if str ends with "a". Log the result to the console.
console.log(str.endsWith("a"));
// - Check if num is either negative or odd using the logical OR operator. Log the result to the console.
console.log(num < 0 || num % 2 !== 0);
// - Check if the length of str is greater than num or equal to 40 using logical OR operator. Log the result to the console.
console.log(str.length > num || str.length == 40);
