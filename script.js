function
    greet(name) {
        return `Hello, ${name}!`;
    }

console.log(greet("World")); // Output: Hello, World!
function
    add(a, b) {
        return a + b;
    }

console.log(add(2, 3)); // Output: 5
function
    multiply(x, y) {
        return x * y;
    }

console.log(multiply(4, 5)); // Output: 20
function
    isEven(num) {
        return num % 2 === 0;
    }

console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false
function
    factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }

console.log(factorial(5)); // Output: 120
function
    reverseString(str) {
        return str.split('').reverse().join('');
    }

console.log(reverseString("hello")); // Output: "olleh"
function
    findMax(arr) {
        return Math.max(...arr);
    }

console.log(findMax([1, 3, 2])); // Output: 3
function
    fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

console.log(fibonacci(6)); // Output: 8
function
    isPalindrome(s) {
        const cleaned = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    }
