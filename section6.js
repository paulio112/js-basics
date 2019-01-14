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
// numbers = [];

// numbers.length = 0;

// numbers.splice(0, numbers.length);

//while (numbers.length > 0)
//     numbers.pop()

//console.log(numbers);

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

// const numbers = [1,2,3]; 

// // for (let number of numbers) 
// //     console.log(number);

// numbers.forEach((number,index) => console.log(number,index ));


// lecture 78 - join arrays 

// const numbers = [1,2,3];
// const joined = numbers.join(',');

// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');

// console.log(parts);

// const combined = parts.join('-');
// // console.log(combined);


// // Lecture 79 - Sorting Arrays

// const courses = [
//     {id:1, name: 'Node.js'},
//     {id:2, name: 'javascript'},
// ];

// courses.sort(function(a,b) {
//     // a < b => -1 
//     // a > b => 1
//     // a === b =>
    
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     retrun 
// });

// console.log(courses);


// Lexture 80 

// const numbers = [-1,-1,-2,-3]; 

// const atLeastOnePostive = numbers.some(function(value) {
//     return value >= 0;
// })

// console.log(atLeastOnePostive); 

//Lecture 81 = Filtering an array

// const numbers = [-11,2,3]; 

// const filtered = numbers.filter(n => n >= 0); 

// console.log(filtered);

// Lecture 81 =  Mapping an array


// const numbers = [1,-1,2,3]; 
// const items = numbers 
//     .filter(n => n >= 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value >= 1)
//     .map(obj => obj.value);

// //const filtered = numbers.filter(n => n >= 0); 
// //const items = filtered.map(n => ({value: n}));
// // const html = '<ul>' + items.join('') + '</ul>';

// console.log(items);

// Lecture 83 = Reducing an array 
// const numbers = [110,3]; 
// // let sum = 0;

// // for (let n of numbers)
// //     sum += n; 

// //     console.log(sum);

// // A = 0; c = 110 
// const sum = numbers.reduce(
//     (accumulator,currentVale) => accumulator + currentVale
// );

// console.log(sum);

//Exercise 1 array form a range

// const numbers = arrayFromRange(1,4);

// console.log(numbers);

// function arrayFromRange(min,max) {
//     const output = [];
//     for (let i = min;  i <= max;  i++);
//         output.push(i);

//     return output;
// }


//Exercise search array 

// const numbers = [1,2,3,4];

// function includes(array,searchElement){
//         for (let element of array) 
//             if(element === searchElement)
//             return true; 
//         return false;  
// }

// console.log(includes(numbers,-1));

// const numbers = arrayFromRange(-10,-4);

// console.log (numbers);

// function arrayFromRange(min,max) {
//     const output = [];
//     for (let i = min; i <= max;  i++) {
//         output.push(i);
//     }
//     return output;
// }


//exercise 2 example 

// const numbers = [1,2,3,4]; 
// console.log(includes(numbers,3));

// function includes (array, searchElement) {
//     for (let key of array) {
//         if (key === searchElement)
//             return true;
//     }
//     return false; 
// }

//exercise 3 example -

// const numbers = [1,2,3,4];
// const output = except(numbers,[1,2]);

// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array) {
//         if (!excluded.includes(element))
//             output.push(element);      
//     }
//     return output;
// }

//Exerice 4 - moving an array element.

// const numbers = [1,2,3,4];
// const output = move(numbers,1,2); 
// console.log(output);

// function move (array,index,offset) {
//     const position = index + offset;  
//     if (position >= array.length || position <= 0){
//         console.error('invalid offset');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index,1)[0];
//     output.splice(index + offset, 0, element);
//     return output;
// }

// exercise count occurances in an array.

// const numbers = [1,2,3,4,1]; 
// const count  = countOccurrences(numbers,1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//    return array.reduce((accumulator,current) => {
//         const  occurence = (current === searchElement) ? 1 : 0;  
//         console.log(accumulator,current,searchElement);
//         return accumulator + occurence;
//     }, 0 ); 
// }

// Get max number in array 

const numbers = [1,2,20,4];
const max = getMax(numbers);

function getMax(array) {
   if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b); 
}

console.log(max);