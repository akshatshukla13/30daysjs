// Part 1: Checking if a number is positive, zero, or negative
let a = 10;

if (a > 0) {
  console.log(a, " is positive"); // Number is positive
} else if (a == 0) {
  console.log(a, " is zero"); // Number is zero
} else {
  console.log(a, " is negative"); // Number is negative
}

// Part 2: Checking voting eligibility
let age = 18;

if (age >= 18) {
  console.log("eligible to vote"); // Age is 18 or more, eligible to vote
} else {
  console.log("Ineligible"); // Age is less than 18, ineligible to vote
}

// Part 3: Printing the day of the week based on a number
let day = 4;
switch (day) {
  case 1:
    console.log("Monday"); // Day 1
    break;
  case 2:
    console.log("Tuesday"); // Day 2
    break;
  case 3:
    console.log("Wednesday"); // Day 3
    break;
  case 4:
    console.log("Thursday"); // Day 4
    break;
  case 5:
    console.log("Friday"); // Day 5
    break;
  case 6:
    console.log("Saturday"); // Day 6
    break;
  case 7:
    console.log("Sunday"); // Day 7
    break;
  default:
    console.log("Enter correct value b/w 1 to 7"); // Invalid day number
    break;
}

// Part 4: Printing grade based on marks
let marks = 50;

// Simplified logic using if-else statements
if (marks > 100 || marks < 0) {
  console.log("Enter correct marks b/w 0 to 100"); // Invalid marks
} else if (marks >= 90) {
  console.log("A+"); // Marks between 90 and 100
} else if (marks >= 80) {
  console.log("A"); // Marks between 80 and 89
} else if (marks >= 70) {
  console.log("B"); // Marks between 70 and 79
} else if (marks >= 60) {
  console.log("C"); // Marks between 60 and 69
} else if (marks >= 50) {
  console.log("D"); // Marks between 50 and 59
} else if (marks >= 33) {
  console.log("Pass"); // Marks between 33 and 49
} else {
  console.log("Failed"); // Marks below 33
}

// Part 5: Finding the greatest age
let ageA = 20;
let ageB = 30;
let ageC = 40;

if (ageA > ageB) {
  if (ageA > ageC) {
    console.log("A is elder"); // Age A is the greatest
  } else {
    console.log("C is greater"); // Age C is the greatest
  }
} else {
  if (ageB > ageC) {
    console.log("B is greater"); // Age B is the greatest
  } else {
    console.log("C is greater"); // Age C is the greatest
  }
}

// Part 6: Checking if a year is a leap year
let year = 2024;

// Leap year condition: divisible by 4 and not divisible by 100, or divisible by 400
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("It is a leap year"); // Year is a leap year
} else {
  console.log("It is NOT a leap year"); // Year is not a leap year
}

// Part 7: Checking if a number is even or odd using ternary operator
let no = 24;
console.log(no % 2 == 0 ? "Even" : "Odd"); // Number is even or odd
