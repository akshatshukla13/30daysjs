// Function to check if a number is odd or even
function checkOddEven(x) {
    if (x % 2 == 0) {
      console.log("even"); // Corrected from "odd" to "even"
    } else {
      console.log("odd"); // Corrected to "odd"
    }
  }
  
  // Function to return the square of a number
  function square(x) {
    return x * x;
  }
  
  // Function to check which number is greater or if they are equal
  function greater(x, y) {
    if (x > y) {
      console.log(x, "is greater");
    } else if (x == y) {
      console.log(x, "and", y, "are equal");
    } else {
      console.log(y, "is greater"); // Corrected from x to y
    }
  }
  
  // Function to concatenate two strings
  function concate(x, y) {
    return x + y;
  }
  
  // Arrow function to return the sum of two numbers
  const sumOfTwoNo = (x, y) => x + y;
  
  // Arrow function to check if a character is present in a string
  const isPresent = (string, char) => {
    return string.includes(char);
  };
  
  // Function to return the product of two numbers, with a default value for the second number
  function product(x, y = 10) {
    return x * y;
  }
  
  // Function expression to return a greeting message
  const greeting = function (name, age = 18) {
    return `Hello ${name}, your age is ${age}`;
  };
  
  // Function to call another function a specified number of times
  const callFn = (fn, no) => {
    for (let i = 0; i < no; i++) { // Added let to declare i
      fn();
    }
  };
  
  // Call callFn to log "hello" 10 times
  callFn(() => {
    console.log("hello");
  }, 10);
  
  // Function to call two functions in sequence
  const callTwoFn = (fn1, fn2, no) => {
    let ans = fn1(no);
    fn2(ans);
  };
  
  // Call callTwoFn with two functions and a number
  callTwoFn(
    (x) => {
      console.log("fn1 logging", x);
      return x + 5;
    },
    (x) => {
      console.log("fn2 logging", x);
    },
    10
  );
  