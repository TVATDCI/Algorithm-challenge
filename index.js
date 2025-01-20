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
// #### CHALLENGE 8: ARRAY CHUNKING
// * Split an array into chunked arrays of a specific length.

console.log(" Task 8: Solution 1");
// SOLUTION 1 - Using a for loop

function chunkArray(arr, size) {
  // Initialize an empty array to hold the chunks.
  const chunked = [];

  // Iterate through the array, incrementing by the chunk size.
  for (let i = 0; i < arr.length; i += size) {
    // Use `slice` to get a subarray of length `size` and push it to `chunked`.
    chunked.push(arr.slice(i, i + size));
  }

  // Return the chunked array.
  return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Learning Point:
// 1. The `for` loop iterates through the array in steps of `size`.
// 2. `slice(i, i + size)` extracts the subarray of the given chunk size.
// 3. This method is simple and efficient for creating chunks.

console.log("\n-------------------\n");

// SOLUTION 2 - Using a while loop and splice
console.log(" Task 8: Solution 2");

function chunkArrayWhile(arr, size) {
  // Initialize an empty array to hold the chunks.
  const chunked = [];

  // While the array still has elements:
  while (arr.length > 0) {
    // Use `splice` to remove the first `size` elements and push them to `chunked`.
    chunked.push(arr.splice(0, size));
  }

  // Return the chunked array.
  return chunked;
}

console.log(chunkArrayWhile([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArrayWhile([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Learning Point:
// 1. `splice(0, size)` removes and returns the first `size` elements of the array.
// 2. The while loop continues until all elements are removed from the array.
// 3. This method modifies the original array, so use caution if you need the original array intact.

console.log("\n-------------------\n");

// SOLUTION 3 - Using Array.from()
console.log(" Task 8: Solution 3");

function chunkArrayFrom(arr, size) {
  // Use `Array.from()` to create a new array, with the length determined by `Math.ceil(arr.length / size)`.
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

console.log(chunkArrayFrom([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArrayFrom([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Learning Point:
// 1. `Array.from()` creates a new array where each element is computed based on a mapping function.
// 2. The mapping function uses `slice` to create chunks based on the index.
// 3. This method is concise and avoids modifying the original array.

console.log("\n-------------------\n");

// SOLUTION 4 - Using a reducer
console.log(" Task 8: Solution 4");

function chunkArrayReducer(arr, size) {
  // Use `reduce` to build the chunked array.
  return arr.reduce((acc, _, i) => {
    // Only process indices that are multiples of `size`.
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size));
    }
    return acc;
  }, []);
}

console.log(chunkArrayReducer([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArrayReducer([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Learning Point:
// 1. `reduce` iterates through the array and builds the result step-by-step.
// 2. `slice` is called only when the current index is a multiple of `size`.
// 3. This method keeps the code concise and functional.

console.log("\n-------------------\n");
// #### CHALLENGE 9: FLATTEN ARRAY
// * Take an array of arrays and flatten it into a single array.

// SOLUTION 1 - Using `Array.prototype.flat`
console.log(" Task 9: Solution 1");

function flattenArrayFlat(arr) {
  // Use the `flat` method to flatten one level deep.
  return arr.flat();
}

console.log(flattenArrayFlat([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. `flat()` is a built-in method that flattens nested arrays.
// 2. It defaults to a depth of 1 but can be given deeper levels (e.g., `flat(2)`).

console.log("\n-------------------\n");

// SOLUTION 2 - Using `Array.prototype.concat` with Spread Operator
console.log(" Task 9: Solution 2");

function flattenArrayConcat(arr) {
  // Use the spread operator to concatenate subarrays into a single array.
  return [].concat(...arr);
}

console.log(flattenArrayConcat([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. The spread operator (`...`) unpacks elements of subarrays.
// 2. `concat` merges the unpacked elements into a single array.
// 3. Works well for 1-level deep arrays.

console.log("\n-------------------\n");

// SOLUTION 3 - Using a `for...of` loop
console.log(" Task 9: Solution 3");

function flattenArrayForLoop(arr) {
  const flat = [];
  // Iterate through each subarray and push its elements into `flat`.
  for (const subarray of arr) {
    flat.push(...subarray);
  }
  return flat;
}

console.log(flattenArrayForLoop([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. Uses the `for...of` loop to iterate over the outer array.
// 2. The spread operator (`...`) unpacks the subarray elements into `flat`.
// 3. Great for manually controlling the process.

console.log("\n-------------------\n");

// SOLUTION 4 - Using `reduce`
console.log(" Task 9: Solution 4");

function flattenArrayReduce(arr) {
  // Use `reduce` to accumulate elements into a single array.
  return arr.reduce((acc, subarray) => acc.concat(subarray), []);
}

console.log(flattenArrayReduce([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. `reduce` iterates through the array, merging subarrays with `concat`.
// 2. Keeps the code concise and functional.
// 3. The empty array (`[]`) is used as the initial value for the accumulator.

console.log("\n-------------------\n");

// SOLUTION 5 - Recursive Flattening
console.log(" Task 9: Solution 5");

function flattenArrayRecursive(arr) {
  // Recursively flatten nested arrays.
  return arr.reduce(
    (acc, item) =>
      acc.concat(Array.isArray(item) ? flattenArrayRecursive(item) : item),
    []
  );
}

console.log(flattenArrayRecursive([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. Handles deeply nested arrays by checking if each `item` is an array.
// 2. Calls itself recursively for nested arrays, flattening them completely.
// 3. Works for any level of nested arrays, unlike `flat()` or simple methods.

console.log("\n-------------------\n");

// SOLUTION 6 - Using `flatMap` (ES10)
console.log(" Task 9: Solution 6");

function flattenArrayFlatMap(arr) {
  // Use `flatMap` to map and flatten the array in one step.
  return arr.flatMap((subarray) => subarray);
}

console.log(flattenArrayFlatMap([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. `flatMap` is a combination of `map` and `flat(1)`.
// 2. Useful if mapping and flattening are both required in the operation.
// 3. Introduced in ES10 (ECMAScript 2019).

console.log("\n-------------------\n");

// #### CHALLENGE 10: ANAGRAM
// * Return true if the two strings are anagrams, false if not.

// SOLUTION 1 - Clean and Sort Approach
console.log(" Task 10: Solution 1");

function isAnagramSort(str1, str2) {
  const formatStr = (str) =>
    str
      .replace(/[^\w]/g, "") // Remove non-alphanumeric characters
      .toLowerCase() // Convert to lowercase
      .split("") // Convert to array
      .sort() // Sort alphabetically
      .join(""); // Rejoin to string

  return formatStr(str1) === formatStr(str2);
}

console.log(isAnagramSort("anagram", "nagaram")); // true
console.log(isAnagramSort("Dormitory", "dirty room##")); // true
console.log(isAnagramSort("hello", "world")); // false

// Learning Point:
// 1. Remove non-alphanumeric characters with `replace(/[^\w]/g, '')`.
// 2. Convert to lowercase to make the comparison case-insensitive.
// 3. Sort the strings and compare them directly.

console.log("\n-------------------\n");

// SOLUTION 2 - Character Map Approach
console.log(" Task 10: Solution 2");

function isAnagramMap(str1, str2) {
  const createCharMap = (str) => {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = (charMap[char] || 0) + 1; // Count occurrences of each character
    }
    return charMap;
  };

  const charMap1 = createCharMap(str1);
  const charMap2 = createCharMap(str2);

  // Compare character maps
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagramMap("anagram", "nagaram")); // true
console.log(isAnagramMap("Dormitory", "dirty room##")); // true
console.log(isAnagramMap("hello", "world")); // false

// Learning Point:
// 1. Build a character map for each string.
// 2. Compare the keys and values in the maps to determine if the strings are anagrams.
// 3. Handles the problem in O(n) time complexity, avoiding sorting.

console.log("\n-------------------\n");

// SOLUTION 3 - Frequency Counter Approach
console.log(" Task 10: Solution 3");

function isAnagramFrequency(str1, str2) {
  const normalize = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  const str1Normalized = normalize(str1);
  const str2Normalized = normalize(str2);

  if (str1Normalized.length !== str2Normalized.length) {
    return false; // Early return if lengths differ
  }

  const charCount = {};

  // Count characters in the first string
  for (let char of str1Normalized) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare counts with the second string
  for (let char of str2Normalized) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(isAnagramFrequency("anagram", "nagaram")); // true
console.log(isAnagramFrequency("Dormitory", "dirty room##")); // true
console.log(isAnagramFrequency("hello", "world")); // false

// Learning Point:
// 1. Use a single object (`charCount`) to track character occurrences.
// 2. Check that all counts match between the two strings.
// 3. Efficient and avoids sorting.

console.log("\n-------------------\n");

// SOLUTION 4 - Using Built-in Functions
console.log(" Task 10: Solution 4");

function isAnagramBuiltIn(str1, str2) {
  return (
    str1.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") ===
    str2.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
}

console.log(isAnagramBuiltIn("anagram", "nagaram")); // true
console.log(isAnagramBuiltIn("Dormitory", "dirty room##")); // true
console.log(isAnagramBuiltIn("hello", "world")); // false

// Learning Point:
// 1. A concise one-liner leveraging built-in methods.
// 2. Similar to Solution 1 but inline.

console.log("\n-------------------\n");

// CHALLENGE 11: ADD ALL NUMBERS

// ## SOLUTION 1: Using `arguments` Object
// The `arguments` object is available in every function (except arrow functions).
// It is an array-like object that contains all arguments passed to the function.
// We iterate through the arguments using a `for` loop and add each value to a sum.
console.log(" Task 11: Solution 1");

function addAll_Arguments() {
  let sum = 0; // Initialize the sum
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]; // Add each argument to the sum
  }
  return sum; // Return the total sum
}

console.log(addAll_Arguments(2, 5, 6, 7)); // 20
console.log(addAll_Arguments(1, 2, 3)); // 6
console.log(addAll_Arguments(10, 20, 30, 40, 50)); // 150

/* ---
Advantages:
- Works in older versions of JavaScript (pre-ES6).
- Useful if you don’t want to explicitly define parameters.

Disadvantages:
- `arguments` is not an actual array, so methods like `.reduce()` or `.map()` cannot be used directly.
--- */

// ## SOLUTION 2: Using Rest Operator (`...args`)
// The rest operator collects all arguments into a true array.
// This makes it easier to use array methods like `.reduce()` to calculate the sum.

console.log("\n-------------------\n");

console.log(" Task 11: Solution 2");
// Use the rest operator `...args` to collect all arguments into an array
function addAll_Rest(...args) {
  return args.reduce((sum, num) => sum + num, 0); // Use `.reduce()` to calculate the total sum
}

console.log(addAll_Rest(2, 5, 6, 7)); // 20
console.log(addAll_Rest(1, 2, 3)); // 6
console.log(addAll_Rest(10, 20, 30, 40, 50)); // 150

/* ---
Advantages:
- Cleaner and more readable.
- `args` is an actual array, so array methods are directly usable.
- Recommended for modern JavaScript development (ES6+).

Disadvantages:
- Not supported in older JavaScript versions (requires ES6+).
--- */

// ## SOLUTION 3: Using Array Conversion with `arguments`
// Converts the `arguments` object into a real array using `Array.prototype.slice.call()`.
// Once converted, we can use `.reduce()` to calculate the sum.

console.log("\n-------------------\n");

console.log(" Task 11: Solution 3");

function addAll_ArrayConversion() {
  const args = Array.prototype.slice.call(arguments); // Convert `arguments` into a real array
  return args.reduce((sum, num) => sum + num, 0); // Use `.reduce()` to calculate the total sum
}

console.log(addAll_ArrayConversion(2, 5, 6, 7)); // 20
console.log(addAll_ArrayConversion(1, 2, 3)); // 6
console.log(addAll_ArrayConversion(10, 20, 30, 40, 50)); // 150

/* ---
Advantages:
- Works with pre-ES6 JavaScript while still enabling array methods.

Disadvantages:
- Verbose compared to modern approaches.
- Relies on the old `arguments` object, which can be confusing.
--- */

// ## SOLUTION 4: Enhanced Handling with Rest Operator
// This version includes validation to filter out non-numeric inputs.
// It uses `.filter()` to exclude invalid data, ensuring only numbers are summed.

console.log("\n-------------------\n");

console.log(" Task 11: Solution 4");

function addAll_Enhanced(...args) {
  return args
    .filter((num) => typeof num === "number") // Filter out non-numeric values
    .reduce((sum, num) => sum + num, 0); // Calculate the sum of the remaining numbers
}

console.log(addAll_Enhanced(2, 5, "a", 6, 7)); // 20
console.log(addAll_Enhanced(1, 2, 3, true, null)); // 6
console.log(addAll_Enhanced()); // 0

/* ---
Advantages:
- Robust and handles edge cases gracefully.
- Ideal for production code where inputs may be unpredictable.

Disadvantages:
- Slightly slower due to the additional `.filter()` step.
--- */

// SUMMARY:
// - `addAll_Arguments`: Best for legacy codebases.
// - `addAll_Rest`: Clean and modern, suitable for most use cases.
// - `addAll_ArrayConversion`: Works with older JavaScript, but less concise.
// - `addAll_Enhanced`: Adds input validation for greater robustness.

console.log("\n-------------------\n");

// CHALLENGE 12: SUM ALL PRIMES
console.log(" Challenge 12: Sum All Primes - Solution 1");

// ## SOLUTION 1: Naive Approach
// Loop through each number up to `num`, checking if it is prime.
// A helper function `isPrime` checks if a number is prime by testing divisibility.

function sumAllPrimes_Naive(num) {
  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false; // Prime numbers must be greater than 1
    for (let i = 2; i < n; i++) {
      // Check divisibility by numbers less than `n`
      if (n % i === 0) return false; // If divisible, not prime
    }
    return true; // Otherwise, it's prime
  }

  let sum = 0; // Initialize the sum
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i; // Add primes to the sum
  }

  return sum; // Return the total sum
}

console.log(sumAllPrimes_Naive(10)); // 17
console.log(sumAllPrimes_Naive(20)); // 77

/* ---
Advantages:
- Easy to understand and implement.

Disadvantages:
- Inefficient for large numbers because the inner loop checks all numbers less than `n`.
--- */

// ## SOLUTION 2: Optimized Check for Primes
// Instead of checking divisibility up to `n - 1`, check only up to `Math.sqrt(n)`.
// A number `n` is not prime if it has a factor less than or equal to its square root.

console.log("\n-------------------\n");

console.log(" Challenge 12: Sum All Primes - Solution 2");

function sumAllPrimes_Optimized(num) {
  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n <= 1) return false; // Prime numbers must be greater than 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // Check divisibility up to √n
      if (n % i === 0) return false; // If divisible, not prime
    }
    return true; // Otherwise, it's prime
  }

  let sum = 0; // Initialize the sum
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i; // Add primes to the sum
  }

  return sum; // Return the total sum
}

console.log(sumAllPrimes_Optimized(10)); // 17
console.log(sumAllPrimes_Optimized(20)); // 77
console.log(sumAllPrimes_Optimized(50)); // 328

/* ---
Advantages:
- Much faster for larger numbers due to the reduced number of checks.
- Focuses on factors up to √n, which is mathematically sufficient.

Disadvantages:
- Still involves nested loops (one for summing and one for checking primality).
--- */

// ## SOLUTION 3: Sieve of Eratosthenes
// The Sieve of Eratosthenes is an efficient algorithm to find all primes up to a given limit.
// Mark multiples of each prime starting from 2, and sum all remaining unmarked numbers.

console.log("\n-------------------\n");

console.log(" Challenge 12: Sum All Primes - Solution 3");

function sumAllPrimes_Sieve(num) {
  if (num < 2) return 0; // No primes below 2

  const primes = Array(num + 1).fill(true); // Create an array of truthy values
  primes[0] = primes[1] = false; // 0 and 1 are not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= num; j += i) {
        primes[j] = false; // Mark multiples of `i` as not prime
      }
    }
  }

  // Sum up all indices marked as prime
  return primes.reduce(
    (sum, isPrime, index) => (isPrime ? sum + index : sum),
    0
  );
}

console.log(sumAllPrimes_Sieve(10)); // 17
console.log(sumAllPrimes_Sieve(20)); // 77
console.log(sumAllPrimes_Sieve(50)); // 328

/* ---
Advantages:
- Most efficient for finding primes in a range.
- Avoids repeatedly checking primarily of the same numbers.

Disadvantages:
- Requires additional memory to store the `primes` array.
- Overhead for small inputs where the naive or optimized approach may suffice.
--- */

// ## SUMMARY
/*
1. `sumAllPrimes_Naive`:
   - Best for small inputs.
   - Simple and easy to implement, but inefficient for large numbers.

2. `sumAllPrimes_Optimized`:
   - Improves on the naive approach by reducing checks to √n.
   - Suitable for moderately large numbers.

3. `sumAllPrimes_Sieve`:
   - Most efficient for finding primes up to a large number.
   - Recommended for large ranges or frequent calculations involving primes.
*/

console.log("\n-------------------\n");

console.log(" Challenge 13: Seek and Destroy - Solution 3");

// ## SOLUTION 3: Using rest parameters and Set for optimized lookups
// A Set provides faster lookups compared to an array, improving performance.

function seekAndDestroy_optimized(array, ...valuesToRemove) {
  const valuesSet = new Set(valuesToRemove); // Convert values to Set for faster lookup
  return array.filter((item) => !valuesSet.has(item)); // Check if the value is not in the set
}

console.log(seekAndDestroy_optimized([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
console.log(seekAndDestroy_optimized(["red", "blue", "green"], "blue")); // ["red", "green"]

/* ---
Advantages:
- Faster lookups compared to using `includes()` because Set has O(1) complexity.
- Efficient for large datasets.

Disadvantages:
- Uses additional memory for the Set.
--- */

console.log("\n-------------------\n");

console.log(" Challenge 13: Seek and Destroy - Solution 4");

// ## SOLUTION 4: Using reduce() method
// Reduce allows accumulation while filtering out unwanted elements.

function seekAndDestroy_reduce(array, ...valuesToRemove) {
  return array.reduce((acc, item) => {
    if (!valuesToRemove.includes(item)) {
      acc.push(item); // Add items not in the valuesToRemove
    }
    return acc;
  }, []);
}

console.log(seekAndDestroy_reduce([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
console.log(seekAndDestroy_reduce([1, 2, 3, 4], 3)); // [1, 2, 4]

/* ---
Advantages:
- Functional and avoids unnecessary intermediate arrays.

Disadvantages:
- More complex to read compared to filter-based solutions.

Summary of Solutions
- Solution	Approach	Time Complexity	Space Complexity	Pros	Cons
- Solution 1	filter() + includes()	O(n * m)	O(n)	Clean, modern, easy to read	Slow for large inputs
- Solution 2 (Legacy)	Loop with arguments	O(n * m)	O(n)	Compatible with older JS	Verbose, less efficient
- Solution 3 (Optimized)	Set for lookup	O(n)	O(n)	Faster for large data	Extra memory for Set
- Solution 4 (Reduce)	Functional reduce	O(n * m)	O(n)	Functional, avoids temp arrays	Slightly complex to read

--- */

console.log("\n-------------------\n");

console.log(" Challenge 14: Even and Odd Sums");

// CHALLENGE 14: EVEN AND ODD SUMS - SOLUTION 1
// ## SOLUTION 1: Using a for loop (classic approach)
function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num; // Add to even sum if divisible by 2
    } else {
      oddSum += num; // Otherwise, add to odd sum
    }
  }

  return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71])); // [170, 116]

/* ---
Advantages:
- Simple and easy to understand.
- Efficient with O(n) time complexity.

Disadvantages:
- Slightly more verbose compared to functional approaches.
--- */

console.log("\n-------------------\n");

// ## SOLUTION 2: Using the reduce() method (Functional Approach)
// This solution uses the reduce function to accumulate sums into an array.
function evenOddSums_reduce(arr) {
  return arr.reduce(
    (acc, num) => {
      num % 2 === 0 ? (acc[0] += num) : (acc[1] += num);
      return acc;
    },
    [0, 0] // Initial values for evenSum and oddSum
  );
}

console.log(evenOddSums_reduce([50, 60, 60, 45, 71])); // [170, 116]

/* ---
Advantages:
- Concise and leverages functional programming.
- Keeps logic within a single call.

Disadvantages:
- Can be harder to read for beginners.
--- */

console.log("\n-------------------\n");

// ## SOLUTION 3: Using filter() and reduce() (Separation of Concerns)
// We first filter the even and odd numbers, then sum them separately.
function evenOddSums_filter(arr) {
  const evenSum = arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
  const oddSum = arr
    .filter((num) => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);

  return [evenSum, oddSum];
}

console.log(evenOddSums_filter([50, 60, 60, 45, 71])); // [170, 116]

/* ---
Advantages:
- Readable and modular approach.
- Good separation of concerns (filtering vs summing).

Disadvantages:
- Less efficient since it iterates through the array twice.
--- */

console.log("\n-------------------\n");

// ## SOLUTION 4: Using a forEach() method
// This solution iterates through the array and updates sums in a forEach loop.
function evenOddSums_forEach(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num) => {
    num % 2 === 0 ? (evenSum += num) : (oddSum += num);
  });

  return [evenSum, oddSum];
}

console.log(evenOddSums_forEach([50, 60, 60, 45, 71])); // [170, 116]

/* ---
Advantages:
- Clean and concise using a modern approach.
- Avoids the need for a loop variable.

Disadvantages:
- Slightly slower compared to a basic for loop.
Summary of Solutions
- Solution	Approach	Time Complexity	Space Complexity	Pros	Cons
- Solution 1	For loop	O(n)	O(1)	Simple and efficient	Verbose
- Solution 2 (Functional)	Reduce method	O(n)	O(1)	Concise, declarative style	Harder for beginners
- Solution 3 (Filtering)	Filter + Reduce	O(n)	O(n)	Readable, modular	Iterates multiple times
- Solution 4 (forEach)	forEach loop	O(n)	O(1)	Clean and modern	Slightly less efficient

--- */
console.log("\n-------------------\n");
