// //section 6 - lecture 69: adding elements to an array element. 

// const numbers = [3,4];

// //end 
// //numbers.push(4,6);
// //start

// numbers.unshift(1,2);

// //middle
// numbers.splice(2,0,'a','b');
// console.log(numbers);


// lecture 70 - finding primitives 

// const numbers = [1,2,3,1,4]; 
// //console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));


// lecture 71 - finding reference types 

// const courses = [
//     { id: 1, name:  'a'},
//     { id: 2, name:  'b'},
// ]; 

// //console.log(courses.includes({id:1, name:'a'}));

// const course = courses.findIndex(function(course) {
//     return course.name === 'a';
// }); 

// console.log(course);
//console.log(numbers.indexOf(1));
//console.log(numbers.lastIndexOf(1));



//lecture 72 - arrow functions

const courses = [
    { id: 1, name:  'a'},
    { id: 2, name:  'b'},
]; 

const course = courses.find(course => course.name === 'b');

console.log(course);