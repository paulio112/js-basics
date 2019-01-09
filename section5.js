// section 5 - lection 48

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw:function(){
//         console.log('draw method');
//     },
//     move: function(){
//         console.log('move method');
//     }
// }

// circle.move();


// section 5 - lection 49

// factory fucntion 

// function createCircle(radius){
//     return {
//         radius,

//         draw() {  
//             console.log('draw method');
//         }
//     }; 
// }
// const circle1 = createCircle(1);
// console.log(circle1);

// section 5 - lection 50 - constructor function
//PAscal convention


// function createCircle(radius){
//     return {
//         radius, 
//         draw(){
//             console.log('draw');
//         }
//     }
// }

//constructer function
// function Circle (radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1)
// console.log(circle);


// Dynamic object example. 
// 

// const circle = {
//     radius: 1
// };  


// circle.colour = 'Yellow';
// circle.draw = function() {}

// delete circle.colour;
// console.log(circle);


// lection 53 ;


// lection 54 - Values types vs reference types ;

// let obj = {value:10};

// function increase(obj) {
//     obj.value++
// }

// increase(obj);
// console.log(obj);


//lecture 55 - 

// const circle = {
//     radius: 1, 
//     draw() {
//         console.log('draw');
//     }
// };


// for (let key in circle) 
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle)) 
//     console.log(key);

// for (let entry of Object.entries(circle)) 
//     console.log(entry);


// if ('colour' in circle) {
//     console.log('yes');
// }


//Section 5 - lecture 56 = Cloning an object

// const circle = {
//     radius: 1, 
//     draw() {
//         console.log('draw');
//     }
// };

// // const another = {};

// // for (let key in circle)
// //     another[key] = circle[key];

// const another = {...circle};
// console.log (another);

//section 5:  lecture 57 - garbage collection.

// let circle = {}; 
// console.log(circle);


// section5 : lecture 58  - Math object: quick demo 

// console.log(Math.random);
// math.round
//math.max 
// math.min 

//section5 : lecture 59. 

// const message = 'this is my first message';
// console.log(message[12]);

//section 6: lecture 60 - Template literals

const message = `This is my 
'first' message`;

console.log(message);
