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


// const readPermission =  4;
// const writePermission = 2; 
// const execute = 1; 

// let myPermission = 0; 
// myPermission = myPermission | readPermission | writePermission;

// console.log(myPermission);

// let message =
// (myPermission & readPermission) ? "Yes" : "no";

// console.log(message);



// let x = (2 + 3) * 4; 
// console.log (x);


// let a = "red";
// let b = "blue";

// let c = a;
// a = b; 
// b = c;  

// console.log(a);
// console.log(b);


// hour 
// if hour is between 6am and 12pm: good morning 
// else good evening.

// let hour = 19;

// if (hour >= 6 &&  hour < 12) 
//  console.log ("good morning");
// else if (hour >= 12 && hour< 18) 
//     console.log("Good afternoon");
// else 
//     console.log("Good evening");


//     let role;
//     role = "guest";


//     switch (role) {
//         case 'guest': 
//             console.log('guest');
//             break;
        
//         case 'moderator':
//             console.log('moderator');
//             break;

//         default :
//             console.log('unknown role');
//     }


//For statement example

// for (let i = 0; i <= 5; i ++) {
//     if(i %2 !== 0) {
//         console.log (i + " is an odd number");    
//     }
//     console.log ("I is the value of " + i );
// } 


// let a = 0;
// while (a <=5) {
//    // console.log ("a is " + a); 
//     if (a % 2 === 0) {
//         console.log ("A is an even number and the number is" + a);
//     }
//     a++;
// }


// A do while example 

// let i = 9; 

// do {
//     if (i % 2 !== 0) {
//         console.log ("I is an even number and the number is " + i);
//         }
//         i++;
//     } while (i <= 5 ) {

//     }


// let i = 0 
//     while (i < 5 ){
//         console.log (i + ' is the value of i');
//     }


// for
//while 
//do  while 

// for in loop

// const person = {
//     name:"mosh",
//     age: 30
// };


// for (let key in person) {
//     console.log(key, person[key]);
// }

//const colours = ["red", "yellow", "blue"];

// for (let index in colours) {
//     console.log(index, colours[index]);
//     console.log (index + " <--- index is");
// }

// For of example 

// for (let colour of colours) {
//     console.log (colour);
// }


let a = 3; 
let b = 2;

function comparisonTool () {

    if (a > b) {
        return a;
    } else {
        return b;
    }

}

console.log(comparisonTool(a,b));


