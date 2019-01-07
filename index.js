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


// let a = 5; 
// let b = 5;

// function comparisonTool (a,b) {
//     return (a > b) ? a : b;
// }

// console.log(comparisonTool(a,b));




// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log (isLandscape(12,11));




// Fizz/buzz example 
//divisible by 3 = fizz
//divisbile by 5 = buzz
//divisble by both 3 and 5 = fizzbuzz
// else output the number 
// if an input is not a number = output type of with that.


// function fizzBuzz (input){

//     if (typeof input !== 'number') 
//         return 'not a number';

//     if ((input % 3 == 0) && (input % 5 == 0) ) 
//         return "THE number is " + input;    

//     if (input % 3 === 0) 
//         return 'fizz';

//     if (input % 5 === 0) 
//         return 'buzz';
    
//     return input;
//     }

// console.log(fizzBuzz(7));


// A spedometer example

// limit is 70 
// under gets an OK message at 70 and below
// every 5 km above they get 1 point. 
// 72km
//math.floor(1.3)
// 12points is ->  a suspension.


// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const mphPerPoint = 5;

//         if(speed <= speedLimit) {
//             console.log('ok');
//             return;
//         }
        
//         let points = Math.floor((speed - speedLimit) / mphPerPoint);
//         if (points >= 12) {
//             console.log('Licence Suspended');
//             } else {
//                 console.log('Points = ', points) 
//             }
//         }
    
// checkSpeed(80);








/// Scott sample 
// fizbuzz when % 15 
// fizz when 5
// buzz when 3

// for (let x = 1; x < 100; x++) {
//     if(x % 15 === 0 ) {  
//         console.log('FizzBuzz');
//     } else if (x  % 5 === 0) {
//         console.log('fizz'); 
//     } else if (x % 3 === 0) {
//         console.log('buzz');
//     }  else {
//         console.log('Number --> ' + x );
//     }     
// }


// show numbers on odd or even upto number supplied. 


function showNumbers(limit) {

    for(let i = 0; i <= limit;  i++) {
        if (i % 2 === 0) 
            console.log(i + ' is even');
         else 
            console.log(i + ' is odd');        
    }
}

showNumbers(100);