
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

