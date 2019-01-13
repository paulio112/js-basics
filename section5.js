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

// const message = `This is my 
// 'first' message`;

// console.log(message);


// Lecture 61

// const now = new Date();
// const date1 = new Date(2018, 0 , 1);
// console.log(date1);


// now.setFullYear(2010);


// Section 5 -  Exercise 1: Scope.  

//street
//city
//zipcode
//Function showaddress(); 


// const address = {
//     street:'Test Street',
//     city: 'Test City', 
//     zipcode: 'WV4 6QY'
// }; 

// function showAddress (address) {
//     for (let key in address)
//         console.log(key,  address[key]);
// }

// showAddress(address);


//exercise 2. 


// const address = {
//      street:'Test Street',
//      city: 'Test City', 
//      zipcode: 'WV4 6QY'
//  }; 


//factory function
//  function createAddress(street,city,zipcode) {
//      return {
//         street,
//         city, 
//         zipcode
//      }
//  }


//  let address = createAddress(1,2,3);
//  console.log(address);

//Constructur function 

// function Address (street,city,zipcode) {
//     this.street = street,
//     this.city = city,
//     this.zipcode =zipcode
// }

// let address = new Address(1,2,3);
// console.log(address);


// // Exercise 3 

// //create 2 objects for below function use. 
// let address1 = new Address(1,2,3);
// let address2 = new Address(1,2,3);

// function Address (street,city,zipcode) {
//     this.street = street,
//     this.city = city,
//     this.zipcode = zipcode
// }

// // Are the values the same? 
// function areEqual (address1,address2) {
//     return address1.street === address2.street &&
//      address1.city === address2.city && 
//      address1.zipcode === address2.zipcde  
// }

// // Are the reference points the same?  
// function areSame (address1,address2) {
//     return address1 === address2;
// }


// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));

//Exercise 4 - Creating a blog post and outputting it.
//title
//body
//author
//views
//comments 
////// author 
////// body
// is live

// const blogPost = {
//     title:'Test title', 
//     body: 'test body',
//     author: 'test author',
//     views:  10,
//     commments: [
//         {author:'Test Comment Author', body: 'Test comment body'}
//     ],
//     isLive: true
// };

// console.log(blogPost);


//Exercise 5 - Constructor fucntion -
// Build a function to check if show we should display a blog article.  



// function Post(title,body,author) {
//     this.title = title; 
//     this.body = body;
//     this.author = author; 
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;    
// }

// let post = new Post ('a','b','c');
// console.log(post);

// last exercise on this section for objects. 
