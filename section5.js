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

function createCircle(radius){
    return {
        radius,

        draw() {  
            console.log('draw method');
        }
    }; 
}
const circle1 = createCircle(1);
console.log(circle1);