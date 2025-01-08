// Map basically to make a new array with same array with some changes
// known as Map
function twice(element){
    return 2*element
};

let arr = [3,5,6,2];
let brr = arr.map(twice); // Using Map fucntion in array

console.log(brr);

let crr = arr.map(ele => ele*-1); // Another Method Using Map fucntion in array
console.log(crr); 

let yrr = arr.map(function(ele){  // Another Method Of Using Map function in array
    return ele*ele;
});
console.log(yrr);







