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

let obj = {value:10};

function increase(obj) {
    obj.value++
}

increase(obj);
console.log(obj);