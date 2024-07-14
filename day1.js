var a = 10;
console.log(a); // 10

let aa = "akshat";
console.log(aa); // akshat

const flag = false;
console.log(flag); // false

let numVar = 10;
console.log(typeof numVar); // number
console.log("numVar ", numVar); // numVar 10

let stringVar = "akshat";
console.log(typeof stringVar); // string
console.log("stringVar ", stringVar); // stringVar akshat

let boolVar = true;
console.log(typeof boolVar); // boolean
console.log("boolVar ", boolVar); // boolVar true

let objVar = {
  firstname: "akshat",
  lastName: "shukla",
};
console.log(typeof objVar); // object
console.log("objVar ", objVar); // objVar { firstname: 'akshat', lastName: 'shukla' }

let arrVar = [1, "akshat", 3];
console.log(typeof arrVar); // object (arrays are a type of object in JS)
console.log("arrVar ", arrVar); // arrVar [ 1, 'akshat', 3 ]

const numConst = 10;
console.log("numConst ", numConst); // numConst 10
// numConst = 20;  // TypeError: Assignment to constant variable.

const stringConst = "abc";
console.log("stringConst ", stringConst); // stringConst abc
// stringConst = "abcdef";  // TypeError: Assignment to constant variable.

const boolConst = true;
// boolConst = false;  // TypeError: Assignment to constant variable.

const arrConst = [1, 2, 3];
// arrConst = [...arrConst, 4];  // TypeError: Assignment to constant variable.
console.log(arrConst); // [ 1, 2, 3 ]
arrConst.push(4);
console.log(arrConst); // [ 1, 2, 3, 4 ]

const objConst = { firstname: "akshat", lastName: "shukla" };
console.log("objConst ", objConst); // objConst { firstname: 'akshat', lastName: 'shukla' }
objConst.firstname = "rishi";
// objConst = {firstname: "rishi",lastName: "sharma"};  // TypeError: Assignment to constant variable.
objConst.middleName = "vijay";
console.log("objConst ", objConst); // objConst { firstname: 'rishi', lastName: 'shukla', middleName: 'vijay' }

// NOTE: value itself can be changed/mutated but new value can't be assigned

// In JavaScript, constants are declared using the const keyword. A variable declared with const cannot be reassigned to a different value. However, it's important to understand that while the binding (the reference to the value) is immutable, the value itself may still be mutable, depending on its type.

// const ensures that the binding is immutable.
// The value itself can still be mutable if it's an object or an array.
// Primitive values (numbers, strings, booleans) held by a const are effectively immutable because their types themselves are immutable.
