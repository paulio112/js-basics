/*//Performing a task 
function greet (name, lastName) {
    console.log('Hello ' + name + lastName);
}

//Calculates a value 
function squared (number){
    return number * number
}

//console.log(squared(2)); 


let x = 10; 
let y = 3; 

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);


console.log(x++);
console.log(x);


// comparison 

console.log (x >= 12);
console.log(x == 11);*/


// If statement example

// let points = 90;  
// let type = points > 100 ? 'Gold' : 'Silver';


// console.log(type);


//Logical operators example

// let highIncome = false; 
// let goodCreditScore = false; 
// let eligibleForLoan = highIncome || goodCreditScore;
// let applicationRefused  = !eligibleForLoan;

// console.log('Application Refused.', applicationRefused);


// let userColour = null;
// let defaultColour = 'blue';
// let currentColour = userColour || defaultColour;

// console.log(currentColour);

//BitWise oeprator 

// //read, write or execite. 
// console.log (1 | 2); // BitWise
// console.log (1 % 2); // BitWise


const readPermission =  4;
const writePermission = 2; 
const execute = 1; 

let myPermission = 0; 
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

let message =
(myPermission & readPermission) ? "Yes" : "no";

console.log(message);