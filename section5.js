// section 5 - lection 48

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw:function(){
        console.log('draw method');
    },
    move: function(){
        console.log('move method');
    }
}

circle.move();