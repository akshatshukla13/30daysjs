let a = 40;
let b = 20;

let add = a + b;
console.log(add); // 60

let sub = a - b;
console.log(sub); // 20

let multiply = a * b;
console.log(multiply); // 800

let divide = a / b;
console.log(divide); // 2

let remainder = a % b;
console.log(remainder); // 0

let x = 2;
let y = 3;

console.log(x); // 2
console.log(y); // 3

x += y;
console.log(x); // 5
console.log(y); // 3

x -= y;
console.log(x); // 2
console.log(y); // 3

let p = 10;
let q = 20;

console.log(p > q); // false
console.log(p < q); // true
console.log(p >= q); // false
console.log(p <= q); // true
console.log(p == q); // false
console.log(p != q); // true

let r = 10;
let s = "10";

console.log(r == s); // true (loose equality, only value comparison)
console.log(r === s); // false (strict equality, value and type comparison)
console.log(r != s); // false (loose inequality, only value comparison)
console.log(r !== s); // true (strict inequality, value and type comparison)

let aa = 10;
let bb = 20;
let cc = 30;

console.log(aa > bb && bb > cc); // false (both conditions must be true)
console.log(aa > bb || cc > aa); // true (at least one condition is true)
console.log(!(aa < bb)); // false (negation of true is false)

console.log(aa >= 0 ? "yes it is positive" : "not positive"); // yes it is positive
