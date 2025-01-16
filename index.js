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

console.log("Task 3: Reverse an Integer");
// ### CHALLENGE 3: REVERSE AN INTEGER

console.log(" Task 3: Solution 1");
// SOLUTION 1
console.log(" Task 3: Solution 1");
function reverseIntX(int) {
  // Let's handle the negative numbers
  const sign = Math.sign(int); // Math.sign() returns the sign of a number, indicating whether the number is positive, negative, or zero.
  // Convert the integer to a string, split the string into an array, reverse the array, and join the array back into a string.
  const reverseString = int.toString().split("").reverse().join("");
  // Convert the string back to an integer and multiply it by the sign.
  return parseInt(reverseString) * sign;
}

console.log(reverseIntX(521) === 125); // true

// SOLUTION 2
console.log(" Task 3: Solution 2");
// Use the parseInt() function to convert the integer to a string, split the string into an array, reverse the array, and join the array back into a string.
function reverseInt(int) {
  return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

console.log(reverseInt(521) === 125); // true

// SOLUTION 3
console.log(" Task 3: Solution 3");

function reverseIntAbs(num) {
  const numSign = Math.sign(num);
  const strNumAbs = Math.abs(num).toString();
  return parseInt(strNumAbs.split("").reverse().join("")) * numSign;
}

console.log(reverseIntAbs(521) === 125); // true
// Solution 3 is more or less the same as solution 2, but this time, we use the Math.abs() function to return the absolute value of a number. I will need to find more use cases for the Math.abs() function. To be continued...
// * The Math.abs() function returns the absolute value of a number, which is the number without its sign.

// // Return an integer in reverse
// // ex:
// reverseInt(521) === 125;
console.log("\n-------------------\n");

console.log("Challenge 4: Capitalize Letters");
// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:
console.log(" Task 4: Solution 1");
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");
  return strArr.map((word) => word[0].toUpperCase() + word.substr(1)).join(" ");
}

console.log(capitalizeLetters("i love javascript") === "I Love Javascript"); // true

// SOLUTION 2
console.log(" Task 4: Solution 2");
function capitalizeLettersX(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

console.log(capitalizeLettersX("i love javascript") === "I Love Javascript"); // true

// SOLUTION 3
console.log(" Task 4: Solution 3");
const capitalizeLettersNinja = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};

console.log(
  capitalizeLettersNinja("i love javascript") === "I Love Javascript"
); // true
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// * The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
// * The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
console.log(
  "\nThe 3 solutions use more or less the same methods, just written differently!  \n"
);
console.log("\n-------------------\n");
// capitalizeLetters('i love javascript') === 'I Love Javascript';

console.log("Task 5: Max Character");
// ### CHALLENGE 5: MAX CHARACTER
console.log(" Task 5: Solution 1");

function maxCharacter(str) {
  const charCount = {}; // Create an object to store the character count!
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1; // Increment the character count!
  }
  // Get the character with the highest count!
  let maxChar = "";
  let maxCount = 0;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }
  return maxChar;
}

console.log(maxCharacter("javascript") === "a"); // true
/** The logic of the code is as follows:
 * * Create an object to store the character count.
 * * Loop through the string and increment the character count.
 * * Get the character with the highest count.
 * * Return the character with the highest count.
 * How to method:
 * Store the character count in an object. Use a for...of loop to iterate over the string and increment the character count.
 * Use a for...in loop to get the character with the highest count.
 * Return the character with the highest count.(maxChar)
 * * FUN FACT! why is (maxCharacter("javascript") === "a") true?
 * * Because the character "a" is the most common character in the string "javascript".
 * a = 2 That is why the function returns "a" or true, it is the most common character in the string!!
 */
// SOLUTION 2
console.log(" Task 5: Solution 2");
const maxCharacterX = (str) => {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxChar = ""; // Initialize the maxChar variable to an empty string.
  let maxCount = 0; // Initialize the maxCount variable to 0.

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
};

console.log(maxCharacterX("javascript") === "a"); // true

// * Not much difference between the two solutions, just an arrow function, written differently!

// // Return the character that is most common in a string
// // ex:
// maxCharacter('javascript') == 'a';

console.log("\n-------------------\n");
console.log("Task 6: FizzBuzz");
// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// SOLUTION 1 - Classic
console.log(" Task 6: Solution 1");
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(); // * Don't forget to call the function!!!#

// SOLUTION 2 - Arrow Function + Ternary Operator
/*console.log(" Task 6: Solution 2");

const fizzBuzzX = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  }
};

fizzBuzzX();
*/

// * The ternary operator is a shorthand way of writing an if...else statement. It consists of a condition followed by a question mark (?), then an expression to execute if the condition is true, followed by a colon (:), and an expression to execute
// * if the condition is false. The ternary operator is used to simplify the code and make it more concise.

console.log("\n-------------------)n");

console.log("Task 7: Longest Word");
// #### CHALLENGE 7: LONGEST WORD
// * Return the longest word(s) in a given string.
// SOLUTION 1 - Return a single longest word
console.log(" Task 7: Solution 1");

function longestWord(str) {
  // Step 1: Remove punctuation using regex and split the string into an array of words.
  const words = str.replace(/[^a-zA-Z ]/g, "").split(" ");

  // Step 2: Sort the array by word length in descending order.
  const sortedWords = words.sort((a, b) => b.length - a.length);

  // Step 3: Return the first word, which is the longest due to the sorting.
  return sortedWords[0];
}

console.log(longestWord("Hi there, my name is Brad")); // "there"
console.log(longestWord("My name is Brad")); // "name"
console.log(longestWord("Brad")); // "Brad"

// Learning Point:
// 1. `replace(/[^a-zA-Z ]/g, "")` ensures only letters and spaces are kept, removing punctuation.
// 2. Sorting the array by length (`b.length - a.length`) ensures the longest word appears first.
// 3. Returning the first element of the sorted array gives the longest word.

console.log("\n-------------------\n");

// SOLUTION 2 - Return an array if multiple words have the same length
console.log(" Task 7: Solution 2");

function longestWordArray(str) {
  // Step 1: Clean and split the string into an array of words.
  const words = str.replace(/[^a-zA-Z ]/g, "").split(" ");

  // Step 2: Find the length of the longest word.
  const maxLength = Math.max(...words.map((word) => word.length));

  // Step 3: Filter the array to include only words that match the max length.
  return words.filter((word) => word.length === maxLength);
}

console.log(longestWordArray("Hi there, my name is Brad")); // ["there"]
console.log(longestWordArray("My name is Brad")); // ["name", "Brad"]
console.log(longestWordArray("Brad")); // ["Brad"]

// Learning Point:
// 1. `Math.max(...words.map(word => word.length))` extracts the longest length efficiently.
// 2. `filter` is used to return all words matching the longest length.
// 3. This approach ensures that multiple words of the same length are returned in an array.

console.log("\n-------------------\n");

// SOLUTION 3 - Only return an array if there are multiple words, otherwise return a single word
console.log(" Task 7: Solution 3");

function longestWordSmart(str) {
  // Step 1: Clean and split the string into an array of words.
  const words = str.replace(/[^a-zA-Z ]/g, "").split(" ");

  // Step 2: Find the length of the longest word.
  const maxLength = Math.max(...words.map((word) => word.length));

  // Step 3: Filter the array to include only words that match the max length.
  const longestWords = words.filter((word) => word.length === maxLength);

  // Step 4: Return the array if there are multiple words; otherwise, return the single word as a string.
  return longestWords.length > 1 ? longestWords : longestWords[0];
}

console.log(longestWordSmart("Hi there, my name is Brad")); // "there"
console.log(longestWordSmart("My name is Brad")); // ["name", "Brad"]
console.log(longestWordSmart("Brad")); // "Brad"

// Learning Point:
// 1. This combines the logic from both previous solutions for flexibility.
// 2. A conditional (`longestWords.length > 1`) determines whether to return an array or a single word.
// 3. Efficiently handles cases where only one word is the longest.
