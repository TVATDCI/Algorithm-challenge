// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// //  ex:
// reverseString('hello') === 'olleh';
console.log("Task 1: Reverse a String");

// SOLUTION 1
console.log(" Task 1: Solution 1");
function reverseStringX(str) {
  // Split the string into an array
  const strArr = str.split("");
  // Reverse the array
  strArr.reverse();
  // Join the array back into a string
  return strArr.join("");
}

console.log(reverseStringX("hello"));

// SOLUTION 2 Just put it together in one line!
console.log(" Task 1: Solution 2");
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello") === "olleh");

// SOLUTION 3 Ninja way
console.log(" Task 1: Solution 3");
// Attach arrow functions to a variable, split the string into an array(''), reverse the array .reverse(), and join the array back into a string .join('')
// print the string('hello') and compare it to 'olleh' to return the boolean value!
const reverseStringNinja = (str) => str.split("").reverse().join("");

console.log(reverseStringNinja("hello") === "olleh");

// SOLUTION 4 : Direct from the console.log
console.log(" Task 1: Solution 4");
// Together with the console.log, split the string into an array, reverse the array, and join the array back into a string
// To get the boolean value, all you have to do is to fill the value inside ('') and compare it to 'olleh'
// Or just take out the === 'olleh' and it will return the reversed string. ALGORITHM!
console.log("hello".split("").reverse().join("") === "olleh");
console.log("hello".split("").reverse().join(""));

console.log("\n-------------------\n");
