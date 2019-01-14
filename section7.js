// //  Section 7 -  Functions section 

// //decleration 

// function walk (){
//     console.log('walk');
// }


// // anon functional expression 
// // let run = function() {
// //     console.log('run');
// // };

// // named functional expression 
// let run = function run() {
//     console.log('run');
// };

// run();


// Hoisting Example 


// args examples

// function sum (){
//     let total = 0;
//     for (let value of arguments) {
//         total += value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5,10));

// rest example for the above function 

function sum(discount, ...prices, someValue ) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20,30));