
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

  let string2 = string.toLowerCase()
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
  return reversed === string ;
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
