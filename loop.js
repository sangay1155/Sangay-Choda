// 1. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Function to get grade
function getGrade(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 70) {
        return "Good";
    } else {
        return "Keep going";
    }
}

// 4. Test the function
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(55));

// 5. While loop doubling until > 1000
let n = 1;
while (n <= 1000) {
    console.log(n);
    n = n * 2;
}