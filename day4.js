// For loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i); // Output the current value of i
}

// For loop to print the multiplication table of 5 from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`); // Output the result of 5 * i
}

// While loop to print numbers from 1 to 10
let i = 1;
while (i != 11) {
    console.log(i); // Output the current value of i
    i++; // Increment i
}

// While loop to print numbers from 10 to 1
let j = 10;
while (j != 0) {
    console.log(j); // Output the current value of j
    j--; // Decrement j
}

// Do-while loop to print numbers from 1 to 5
let k = 1;
do {
    console.log(k); // Output the current value of k
    k++; // Increment k
} while (k != 6);

// Calculate the factorial of 5 using a do-while loop
let no = 5;
let fact = 1;
do {
    if (no == 0) {
        break; // If no is 0, break out of the loop
    }
    fact = fact * no; // Multiply fact by no
    no--; // Decrement no
} while (no != 0);
console.log(fact); // Output the calculated factorial

// Nested for loop to print a right-angled triangle of stars
let n = 5;
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*"); // Print a star without newline
  }
  console.log(); // Move to the next line
}

// For loop to print numbers from 1 to 10, skipping 5
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue; // Skip the current iteration if i is 5
  console.log(i); // Output the current value of i
}

// For loop to print numbers from 1 to 10, breaking at 7
for (let i = 1; i <= 10; i++) {
  if (i == 7) break; // Break out of the loop if i is 7
  console.log(i); // Output the current value of i
}
