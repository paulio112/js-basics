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

// const courses = [
//     { id: 1, name:  'a'},
//     { id: 2, name:  'b'},
// ]; 

// const course = courses.find(course => course.name === 'b');

// console.log(course);

//lecture 72 = removing elements from an array

//const numbers = [1,2,3,4]; 
//const last = numbers.pop ();
// console.log(numbers);
// console.log(last);

// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// numbers.splice(0,2);
// console.log(numbers);

//empty an array lecture 74

// let numbers = [1,2,3,4];
// let another =  numbers;
// // numbers = [];

// //numbers.length = 0;

// //numbers.splice(0, numbers.length);

// while (numbers.length > 0)
//     numbers.pop()

// //console.log(numbers);

//lecture 75 - combining and slicing arrays.

// const first = [{id:1}]; 
// const second = [4,5,6];

// const combined = first.concat(second);
// const slice = combined.slice(2);
// console.log(slice);

//Lecture 76 = es6 version of slice/combine. 

// const first = [1,2,3]; 
// const second = [4,5,6];

// const combined = [...first, 'hello ',...second];
// const copy =  [...combined];

//console.log(combined);

//Lecture 77 - iterating the array. 

const numbers = [1,2,3]; 

// for (let number of numbers) 
//     console.log(number);

numbers.forEach((number,index) => console.log(number,index ));