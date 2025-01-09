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

console.log("Task 2: Palindrome");
// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:
// isPalindrome('racecar') === true;
// isPalindrome('hello') == false;
// * Palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
// * Allow only alphanumeric characters, ignore case, and ignore spaces.
// * Ideally, i would like to compare the original string to the reversed string?
// * Use the reverse() method to reverse the string.
// * Compare the reversed string to the original string.
// * Return true if they are the same and false if they are different.
// SOLUTION 1
console.log(" Task 2: Solution 1");
function isPalindrome(str) {
  // Filter out with regex all non-alphanumeric characters and convert the string to lowercase.
  const cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Check if the string is equal to the reversed version.
  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(isPalindrome("racecar") === true); // true
console.log(isPalindrome("hello") === false); //true
console.log(isPalindrome("hello") !== false); //false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// Learning point: The regex /[^a-z0-9]/gi is used to filter out all non-alphanumeric characters. The g flag is used to search for all occurrences in the string, and the i flag is used to ignore the case.
// * NOTE: The console.log printout with the boolean value is a good way to test the function. It is a good practice to test the function with different inputs to ensure it works as expected.
/** In this case, console.log(isPalindrome('racecar') === true); will print true, and
 * console.log(isPalindrome('hello') === false); will also print true.
 *
 * console.log(isPalindrome('racecar')); will print true, as "racecar" is a palindrome, BUT
 * console.log(isPalindrome('hello')); will print false, as "hello" is not a palindrome.
 */
console.log("\n-------------------\n");

// SOLUTION 2
console.log(" Task 2: Solution 2");
// * Use an arrow function to define the function.
const isPalindromeX = (str) => {
  return (
    str.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
    str
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
};
// * Logic of the code is the same as the previous solution, but this time, we use an arrow function to define the function. return using === to compare the original string to the reversed string.

console.log(isPalindromeX("racecar") === true); // true
console.log(isPalindromeX("hello") === false); //true
console.log(isPalindromeX("hello") !== false); //false
console.log(isPalindromeX("racecar")); // true
console.log(isPalindromeX("hello")); // false

console.log("\n-------------------\n");
// SOLUTION 3
console.log(" Task 2: Solution 3");
// Ninja for personal fun!
const isPalindromeNinja = (str) =>
  str.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
  str
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
// * Note: There is not much difference between the previous solutions(with arrow function) and this one. The only difference is that i did not use the return keyword!!!
console.log(isPalindromeX("racecar") === true); // true
console.log(isPalindromeX("hello") === false); //true
console.log(isPalindromeX("hello") !== false); //false
console.log(isPalindromeX("racecar")); // true
console.log(isPalindromeX("hello")); // false

console.log("\n-------------------\n");
