// ============================================================
// ! CHALLENGE 1: REVERSE A STRING
// Goal: Return the given string in reverse order.
// Example: reverseString('hello') === 'olleh'
// ============================================================
console.log("Task 1: Reverse a String");

// SOLUTION 1 – Step-by-step (most readable for beginners)
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

// SOLUTION 2 – Chained one-liner (same logic, more compact)
console.log(" Task 1: Solution 2");
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello") === "olleh");

// SOLUTION 3 – Arrow function shorthand (ES6 style)
console.log(" Task 1: Solution 3");
// Use an arrow function: split the string into an array, reverse it, then join it back.
// Comparing to 'olleh' returns a boolean — remove the comparison to get the reversed string.
const reverseStringNinja = (str) => str.split("").reverse().join("");

console.log(reverseStringNinja("hello") === "olleh");

// SOLUTION 4 – Inline, no function needed
console.log(" Task 1: Solution 4");
// You can run this directly — no function needed.
// Removing '=== "olleh"' will log the reversed string instead of the boolean.
console.log("hello".split("").reverse().join("") === "olleh");
console.log("hello".split("").reverse().join(""));

console.log("\n-------------------\n");

console.log("Task 2: Palindrome");
// ============================================================
// ! CHALLENGE 2: VALIDATE A PALINDROME
// ============================================================

// SOLUTION 1 - Standard Function
console.log(" Task 2: Solution 1");
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
console.log(isPalindrome("racecar") === true);
console.log(isPalindrome("A man a plan a canal Panama") === true);

console.log("\n-------------------\n");

// SOLUTION 2 – Optimized Arrow Function
// We clean the string once in a variable to avoid redundant regex processing.
console.log(" Task 2: Solution 2");
const isPalindromeX = (str) => {
  const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return clean === clean.split("").reverse().join("");
};
console.log(isPalindromeX("hello") === false);

console.log("\n-------------------\n");

// SOLUTION 3 – Ultra-compact (The "True" Ninja One-Liner)
// Note: This version is concise, but repeats the cleaning logic.
// Great for showing off JS syntax knowledge!
console.log(" Task 2: Solution 3");
const isPalindromeNinja = (str) =>
  str.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
  str
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

console.log(isPalindromeNinja("racecar") === true);
console.log(isPalindromeNinja("hello") === false); // Fixed function name here

console.log("\n-------------------\n");

// SOLUTION 4 – The "two-Pointer Technique" (efficient, no extra space)
// Instead of reversing the whole string (which takes $O(n)$ space), use two pointers to compare from both ends. This is more memory-efficient.
const isPalindromeTwoPointer = (str) => {
  const clean = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(" Task 2: Solution 4");
// * This method compares characters from the start and end of the cleaned string.
console.log(isPalindromeTwoPointer("racecar") === true); // true
console.log(isPalindromeTwoPointer("hello") === false); //true
console.log(isPalindromeTwoPointer("hello") !== false); //false
console.log(isPalindromeTwoPointer("A man a plan a canal Panama")); // true

/* ---
Learning Points:
1. The Two-Pointer technique is more "Memory Efficient" because it doesn't 
   rely on .split() or .reverse(), which create extra arrays in memory.
2. We stop at the middle (left < right), meaning we only do N/2 comparisons.
3. This is a favorite "Optimization" question in technical interviews!
--- */

console.log("\n-------------------\n");

console.log("Task 3: Reverse an Integer");

console.log("\n-------------------\n");
// ============================================================
// ! CHALLENGE 3: REVERSE AN INTEGER
// Goal: Return the digits of an integer in reverse order.
// Handles negative numbers by preserving the original sign.
// Example: reverseInt(521)  === 125
//          reverseInt(-521) === -125
// ============================================================

// SOLUTION 1 – Step-by-step with sign handling
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

// SOLUTION 2 – Chained one-liner (same logic, more compact)
console.log(" Task 3: Solution 2");
// Convert to string, reverse, then convert back to integer, and reapply sign.
function reverseInt(int) {
  return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

console.log(reverseInt(521) === 125); // true

// SOLUTION 3 – Using Math.abs() to handle the sign separately
console.log(" Task 3: Solution 3");
// Math.abs() strips the sign before reversing, then we reapply it with Math.sign().
// Math.abs(-521) → 521, reversed → 125, then × -1 → -125.

function reverseIntAbs(num) {
  const numSign = Math.sign(num);
  const strNumAbs = Math.abs(num).toString();
  return parseInt(strNumAbs.split("").reverse().join("")) * numSign;
}

console.log(reverseIntAbs(521) === 125); // true
// Note: All three solutions produce the same result.
// The key difference is that Solution 3 explicitly converts to a positive number
// with Math.abs() before reversing, making the sign handling very transparent.
console.log("\n-------------------\n");

console.log("Challenge 4: Capitalize Letters");
// ============================================================
// ! CHALLENGE 4: CAPITALIZE LETTERS
// Goal: Return a string with the first letter of every word capitalized.
// Example: capitalizeLetters('i love javascript') === 'I Love Javascript'
// ============================================================
console.log(" Task 4: Solution 1");
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");
  // word[0].toUpperCase() capitalizes the first letter.
  // word.slice(1) returns the rest of the word (substr() is deprecated — use slice()).
  return strArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeLetters("i love javascript") === "I Love Javascript"); // true

// SOLUTION 2 – Same logic chained into one return statement
console.log(" Task 4: Solution 2");
function capitalizeLettersX(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeLettersX("i love javascript") === "I Love Javascript"); // true

// SOLUTION 3 – Arrow function (same logic, more concise syntax)
console.log(" Task 4: Solution 3");
const capitalizeLettersNinja = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(
  capitalizeLettersNinja("i love javascript") === "I Love Javascript",
); // true
// Key methods used across all 3 solutions:
// - toLowerCase() + split(' '): normalize and break the string into words.
// - map(): create a new array by transforming each element.
// - word[0].toUpperCase(): capitalize the first letter of a word.
// - word.slice(1): return the rest of the word from index 1 onwards.
//   (Note: substr() is deprecated in modern JavaScript — always prefer slice())
// - join(' '): reassemble the words into a single string.
console.log(
  "\nThe 3 solutions use more or less the same methods, just written differently!  \n",
);
console.log("\n-------------------\n");
// capitalizeLetters('i love javascript') === 'I Love Javascript';

console.log("Task 5: Max Character");
// ============================================================
// ! CHALLENGE 5: MAX CHARACTER
// Goal: Return the character that appears most often in a string.
// Example: maxCharacter('javascript') === 'a'
// Fun fact: 'a' appears twice in 'javascript' — more than any other letter.
//
// How it works:
// 1. Use a 'for...of' loop to count each character and store it in an object.
//    (for...of gives you the VALUES of an iterable like a string or array)
// 2. Use a 'for...in' loop to find the key with the highest count.
//    (for...in gives you the KEYS of an object)
// 3. Return the character with the highest count.
// ============================================================
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

// SOLUTION 2 – Arrow function (same logic, more compact syntax)
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
// Same logic as Solution 1 — just rewritten as an arrow function.

console.log("\n-------------------\n");

// SOLUTION 3 – The reduce One-Liner (functional style)
// Using reduce to build the map and find the max character in a single functional chain. This is more concise but less readable for beginners.
console.log(" Task 5: Solution 3");
const maxCharOneLiner = (str) => {
  const charMap = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(charMap).reduce((a, b) =>
    charMap[a] > charMap[b] ? a : b,
  );
};
console.log(maxCharOneLiner("javascript") === "a"); // true
// Learning Point:
// 1. The first reduce builds the character count map in a functional style.
// 2. The second reduce iterates over the keys of the map to find the character with the highest count.

console.log("\n-------------------\n");

console.log("Task 6: FizzBuzz");
// ============================================================
// ! CHALLENGE 6: FIZZBUZZ
// Goal: Print numbers 1–100. Replace:
//       - multiples of 3        → "Fizz"
//       - multiples of 5        → "Buzz"
//       - multiples of both 3×5 → "FizzBuzz"
// Tip: Always check for 15 (= 3×5) FIRST — otherwise it gets caught by 3 or 5 alone.
// ============================================================
// SOLUTION 1 – Classic if/else (most readable)
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

// SOLUTION 2 – Arrow function with ternary operator (shorter, same logic)
// The ternary operator is a one-line if/else:  condition ? valueIfTrue : valueIfFalse
// They can be chained — always check the most specific case (15) first.
console.log(" Task 6: Solution 2");

const fizzBuzzX = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
            ? "Buzz"
            : i,
    );
  }
};

fizzBuzzX();

// * The ternary operator is a concise way to write if/else.
// * Deeply chained ternaries can be hard to read, so use them wisely.

console.log("\n-------------------\n");

console.log("Task 7: Longest Word");
// ============================================================
// ! CHALLENGE 7: LONGEST WORD
// Goal: Return the longest word(s) in a given sentence.
// Punctuation is ignored (e.g. "there," is treated as "there").
// Three approaches:
//   Solution 1 – return a single longest word
//   Solution 2 – return an array (includes ties)
//   Solution 3 – smart: single word or array depending on ties
// ============================================================
// SOLUTION 1 – Return a single longest word
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

// SOLUTION 2 – Return an array if multiple words share the same length
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

// SOLUTION 3 – Return an array only if there are ties, otherwise a single word
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
// ============================================================
// ! CHALLENGE 8: ARRAY CHUNKING
// Goal: Split an array into smaller arrays ("chunks") of a given size.
// The last chunk may be smaller if the array doesn't divide evenly.
// Example: chunkArray([1,2,3,4,5,6,7], 3) → [[1,2,3],[4,5,6],[7]]
// ============================================================

// SOLUTION 1 – Using a for loop (simple and efficient)
console.log(" Task 8: Solution 1");

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

// SOLUTION 2 – Using a while loop and splice()
// ⚠️  WARNING: splice() modifies the original array!
// If you need to keep the original array unchanged, use slice() (Solution 1 or 3).
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

// SOLUTION 3 – Using Array.from() (concise, avoids modifying original)
console.log(" Task 8: Solution 3");

function chunkArrayFrom(arr, size) {
  // Use `Array.from()` to create a new array, with the length determined by `Math.ceil(arr.length / size)`.
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

console.log(chunkArrayFrom([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunkArrayFrom([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Learning Point:
// 1. `Array.from()` creates a new array where each element is computed based on a mapping function.
// 2. The mapping function uses `slice` to create chunks based on the index.
// 3. This method is concise and avoids modifying the original array.

console.log("\n-------------------\n");

// SOLUTION 4 – Using reduce() (functional style)
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
// ! #### CHALLENGE 9: FLATTEN ARRAY
// * Take an array of arrays and flatten it into a single array.

// SOLUTION 1 – Using flat() — the simplest built-in approach
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

// SOLUTION 2 – Using concat() with spread operator
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

// SOLUTION 3 – Using a for...of loop (manual control)
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

// SOLUTION 4 – Using reduce() (functional style)
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

// SOLUTION 5 – Recursive flattening (handles any depth)
console.log(" Task 9: Solution 5");

function flattenArrayRecursive(arr) {
  // Recursively flatten nested arrays.
  return arr.reduce(
    (acc, item) =>
      acc.concat(Array.isArray(item) ? flattenArrayRecursive(item) : item),
    [],
  );
}

console.log(flattenArrayRecursive([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]

// Learning Point:
// 1. This is the most powerful solution — it handles arrays nested at any depth.
// 2. Array.isArray(item) checks if an element is itself an array before going deeper.
// 3. If it is an array, the function calls itself recursively to flatten it.
// 4. Works for any level of nesting, unlike flat() or the other methods above.

console.log("\n-------------------\n");

// SOLUTION 6 – Using flatMap() — ES10 (map + flat in one step)
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

// ============================================================
// ! CHALLENGE 10: ANAGRAM
// An anagram is a word formed by rearranging the letters of another word.
// Example: "anagram" and "nagaram" use the exact same letters.
// Goal: Return true if the two strings are anagrams, false if not.
// Rules: Ignore spaces, punctuation, and letter case.
// ============================================================

// SOLUTION 1 – Clean, sort, and compare (easy to understand)
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

// SOLUTION 2 – Character map approach (O(n) — no sorting needed)
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

// SOLUTION 3 – Frequency counter (single pass, efficient)
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

// SOLUTION 4 – Built-in one-liner (concise)
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

// ============================================================
// ! CHALLENGE 11: ADD ALL NUMBERS
// Goal: Return the sum of all arguments passed in, regardless of how many there are.
// Example: addAll(2, 5, 6, 7) === 20
// ============================================================

// ## SOLUTION 1: Using the 'arguments' object (pre-ES6 style)
// The 'arguments' object is like an array but is NOT a real array.
// It is available in every regular function (but NOT in arrow functions).
// You cannot call .reduce() or .map() on it directly — only a regular for loop works here.
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

// ## SOLUTION 2: Using the rest operator ...args (modern ES6+ style)
// The rest operator collects all arguments into a TRUE array.
// This means you can use array methods like .reduce() directly.

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

// ## SOLUTION 3: Converting 'arguments' to a real array (bridge between old and new)
// Array.prototype.slice.call(arguments) turns the 'arguments' object into a real array.
// Once converted, we can use .reduce() to calculate the sum.

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

// ## SOLUTION 4: With input validation (recommended for production)
// Uses .filter() to remove non-numeric values before summing.
// This makes the function safe to use even if someone accidentally passes a string or null.

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

// ============================================================
// ! CHALLENGE 12: SUM ALL PRIMES
// A prime number is a whole number > 1 with no factors other than 1 and itself.
// Goal: Return the sum of all prime numbers up to and including 'num'.
// Example: sumAllPrimes(10) === 17  (2 + 3 + 5 + 7)
// Three solutions in order of efficiency: Naive → Optimized → Sieve
// ============================================================
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
    0,
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

// ============================================================
// ! CHALLENGE 13: SEEK AND DESTROY
// Goal: Remove from an array any elements that match the extra arguments.
// Example: seekAndDestroy([2,3,4,6,6,"hello"], 2, 6) → [3, 4, "hello"]
// ============================================================

// ## SOLUTION 1: Using filter() + includes() (clean and modern)
// The rest operator (...valuesToRemove) collects all extra arguments into an array.
// filter() keeps only elements that are NOT found in that list.
console.log(" Challenge 13: Seek and Destroy - Solution 1");

function seekAndDestroy(array, ...valuesToRemove) {
  return array.filter((item) => !valuesToRemove.includes(item));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
console.log(seekAndDestroy(["red", "blue", "green"], "blue")); // ["red", "green"]

/* ---
Advantages:
- Clean, readable, and modern (ES6+).
Disadvantages:
- includes() is O(m) per element, so total time is O(n × m) for large inputs.
--- */

console.log("\n-------------------\n");

// ## SOLUTION 2: Using the legacy 'arguments' object (pre-ES6 compatible)
// Before ES6, there was no rest operator. We used 'arguments' to access all inputs.
// We slice the first argument (the array) and the rest (values to remove) manually.
console.log(" Challenge 13: Seek and Destroy - Solution 2");

function seekAndDestroy_legacy() {
  const array = Array.prototype.slice.call(arguments)[0];
  const valuesToRemove = Array.prototype.slice.call(arguments, 1);
  return array.filter((item) => !valuesToRemove.includes(item));
}

console.log(seekAndDestroy_legacy([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
console.log(seekAndDestroy_legacy(["red", "blue", "green"], "blue")); // ["red", "green"]

/* ---
Advantages:
- Compatible with older JavaScript (pre-ES6).
Disadvantages:
- Verbose and harder to read. Use Solution 1 for modern projects.
--- */

console.log("\n-------------------\n");

console.log(" Challenge 13: Seek and Destroy - Solution 3");

// ## SOLUTION 3: Using a Set for faster lookups (optimized for large data)
// A Set provides O(1) lookups, making this faster than includes() for large inputs.

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
// ============================================================
// ! CHALLENGE 14: EVEN AND ODD SUMS
// Goal: Return an array of two sums: [sumOfEvenNumbers, sumOfOddNumbers].
// Example: evenOddSums([50, 60, 60, 45, 71]) === [170, 116]
// ============================================================

// ## SOLUTION 1: Using a for...of loop (classic, most readable)
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

// ## SOLUTION 2: Using reduce() (functional style, one pass)
function evenOddSums_reduce(arr) {
  return arr.reduce(
    (acc, num) => {
      num % 2 === 0 ? (acc[0] += num) : (acc[1] += num);
      return acc;
    },
    [0, 0], // Initial values for evenSum and oddSum
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

// ## SOLUTION 3: Using filter() + reduce() (most readable, two passes)
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

// ## SOLUTION 4: Using forEach() (imperative style, clean and modern)
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
