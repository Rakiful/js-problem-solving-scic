// Problem 1
function reverseString(string) {
  if (typeof string !== "string") {
    return "Invalid input";
  }

  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));

//Problem 2
function countVowels(string) {
  if (typeof string !== "string") {
    return "Invalid input";
  }

  let string2 = string.toLowerCase();
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < string2.length; i++) {
    if (vowels.includes(string2[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming hero"));
console.log(countVowels("rakiful"));

// Problem 3
function isPalindrome(string) {
  if (typeof string !== "string") {
    return "Invalid input";
  }

  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return reversed === string;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("wow"));

// Problem 4
function findMaximumNumber(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Invalid input";
  }

  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
}

console.log(findMaximumNumber([5, 1, 9, 3]));
console.log(findMaximumNumber([10, 20, 7]));
console.log(findMaximumNumber([-3, -7, -1]));

// Problem 5
function removeDuplicate(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Invalid input";
  }

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(removeDuplicate([5, 1, 6, 9, 3, 5, 5, 6, 6]));
console.log(removeDuplicate([2, 2, 3, 5, 5, 6]));

// Problem 6
function sumOfAllNumber(array) {
  if (!Array.isArray(array)) {
    return "Invalid input";
  }

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }

  return total;
}

console.log(sumOfAllNumber([5, 1, 6, 9, 3, 5, 5, 6, 6]));
console.log(sumOfAllNumber([5, 10, 0.3]));

// Problem 7
function findEvenNumber(array) {
  if (!Array.isArray(array)) {
    return "Invalid input";
  }

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(findEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(findEvenNumber([44, 21, 16, 77, 12]));

//Problem 8
function capitalizeFirstLetter(string) {
  if (typeof string !== "string") {
    return "Invalid input";
  }

  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i].charAt(0).toUpperCase();
    let restLetter = words[i].slice(1);
    words[i] = firstLetter + restLetter;
  }

  let newString = words.join(" ");

  return newString;
}

console.log(capitalizeFirstLetter("hello world"));
console.log(capitalizeFirstLetter("programming hero"));
console.log(capitalizeFirstLetter("md rakiful islam joy"));