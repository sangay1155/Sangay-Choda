// String example
let str = "Hello World";

// 1. Print each character
for (let ch of str) {
    console.log(ch);
}

// 2. Count vowels
let count = 0;
for (let ch of str) {
    if ("aeiouAEIOU".includes(ch)) {
        count++;
    }
}
console.log("Vowels:", count);

// 3. Reverse the string
let reversed = str.split("").reverse().join("");
console.log("Reversed:", reversed);