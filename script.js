
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