//section 6 - lecture 69: adding elements to an array element. 

const numbers = [3,4];

//end 
//numbers.push(4,6);
//start

numbers.unshift(1,2);

//middle
numbers.splice(2,0,'a','b');
console.log(numbers);