// //logical and (&&)
// //return true if both operands are true
// // example for approving loans
// let highIncome = false;
// let goodCreditScore = false;
// // let eligibleForLoan = highIncome && goodCreditScore; // cannot be true if both are not true
// let eligibleForLoan = highIncome || goodCreditScore; // always true if one is true
// console.log("Eligible", eligibleForLoan);
// //Not(!)
// let applicationRefused = !eligibleForLoan; // will always be opposite of eligible gor loan

// console.log("application refused", applicationRefused);

//falsy
// undefined
// null
// NaN
// 0
// false
// ""

//anything that is not falsy => truthy

//example
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// operators precedence
let x = (2 + 3) * 4; //* bodmas rule :)
console.log(x);

//Programming exercise Swapped the value
// Output a = blue and b = red

let a = "red";
let b = "blue";
// code here
let c = a; // red copied to c
a = b; // a = blue
b = c; // c = red =b

console.log(a);
console.log(b);
