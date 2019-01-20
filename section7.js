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

// function sum(discount, ...prices ) {
//     const total = prices.reduce((a,b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30, 1 ));

//interest function - using default

// function interest (principle, rate = 3.5, years = 5) { 
//     // rate = rate || 3.5;
//     // years = years || 5;
//     return principle * rate / 100 * years;
// }

// console.log(interest(10000, 3.5,10));


// getters and setters example 

// const person = {
//     firstName: 'Paul',
//     lastName: 'Southall',
//     set fullName(value) {
//         if (typeof value !== 'string') 
//             throw new Error('Value is not a string');
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// // Getters to access properties in an object 
// // setters to change or mutate properties in an object
// try {
//     person.fullname = true; 
// }
// catch(e) {
//     alert(e)
// } 
// console.log(person);


// Local Vs global scope 
// function start (){
//     const message = 'hi';
// }
// console.log(message);


//let vs var 

// var is function wide open scope -  also adds to the window element.
// let is block scope. 



// the this keyword


// const video = {
//     title: 'a', 
//     tags: ['a','b','c'],
//     showTags() {
//         console.log(this.tags);
//     }
// };

// video.stop = function() {
//     console.log(this);
// }


// function Video(title) {
//     this.title = title; 
//     console.log(this);
// }


// // playVideo();

// const v = new Video('Hello World');



// function playVideo() {
//     console.log(this);
// };

// playVideo.call({
//     name:'mossh'
// });



// playVideo.apply({
//     name:'mossh aooky'
// });




//Exercise 1 - OO programming 


// sum() takes lots of arg  and returns the sum 
// modify sum function to accept array as part 2?
// array.isArray

// console.log(sum(1,2,3,4));

// function sum (...items) {
//  if (items.length === 1 && Array.isArray(items][0]))
//   return items.reduce((a,b) => a + b);
// }


// Circle.radius = 2'
// circle .area = 20 

// const circle = {
//     radius:1, 
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);



//Exercise 3- error handling. 

