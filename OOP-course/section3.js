//Object literal creation.

// const circle = {
//     radius: 1, 
//     location: {
//         x: 1, 
//         y: 1,
//     }, 
//     draw: function () {
//         console.log('draw2');
//     }
// };


// circle.draw();

// factory object if they have behaviour

// function createCircle (radius) {
//     return {
//         radius, 
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }


//  const circle = createCircle(1);
// // circle.draw();

// // Using a constructor function to create a function.  

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// Circle.call({},1);
// Circle.apply({},[1,2,3,4]);

// const another = new Circle(1);

/// In Javascript - fucntions are objects. 

// Value vs reference types (Primitives)
//primitives are copied by value
// reference is a pointer equiv.
// Reference

// let obj = {value: 10};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

//Adding or removing properties from an object. 


// function Circle (radius) {
//     this.radius = radius; 
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// user.token  = 'sdkhsdkhs';

// Adding example
//  circle.location = {x: 1};

// const propertyName = 'center-location';
// circle[propertyName];
// circle['location'] = {x: 1};

// Removing somethign from an object. 

//delete circle.location; 


// // Enurmerating Properties,

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function (){
//         console.log('Draw Function Example');
//     }
// }

// const circle = new Circle(10);
// //console.log(circle);

// // for (let key in circle) {
// //     if (typeof circle[key] !== 'function') {
// //         console.log(key, circle[key]);
// //     } 
// // // }

// // const keys = Object.keys(circle); 
// // console.log(keys);

// if ('radius1' in circle) {
//     console.log('circle has a radius');
// }]

// Abstraction example - how do we hide members from the outside. 


// function Circle () {
//     this.radius = radius ;
//     let defaultLocation = {x: 0, y: 0};

//     let computeOptimumLocation = function(factor) {
//         console.log('compute');
//     }

//     this.draw = function(){ 
//         computeOptimumLocation(0.1);
//         console.log('draw');
//     }
// }

// const circle = new Circle(10); 
// circle.draw();



// Getters and setters example. 



// function Circle (radius) {
//     this.radius = radius ;
//     let defaultLocation = {x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }

//     this.draw = function(){ 
//         console.log('draw');
//     }

//     Object.defineProperty(this, 'defaultLocation',{
//        get:function(){
//             return defaultLocation;
//        } 
//     });
// }

// const circle = new Circle(10); 
// circle.defaultLocation();


//Exercise for a stop watch

// const sw = new Stopwatch(); 

// duration = 0, 
// reset = 0 
// start = start counting
// stop = stop counting 

function Stopwatch() { 
    let startTime, endTime, running, duration = 0;
  
    this.start = function() {
      if (running) 
        throw new Error('Stopwatch has already started.');
      
      running = true; 
  
      startTime = new Date();
    };
  
    this.stop = function() {
      if (!running) 
        throw new Error('Stopwatch is not started.');
  
      running = false; 
        
      endTime = new Date();
  
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds; 
    };
  
    this.reset = function() { 
      startTime = null;
      endTime = null;
      running = false; 
      duration = 0; 
    };
  
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    });
  }
  