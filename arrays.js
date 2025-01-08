arr = [1,3,5];
n = arr.length; // For checking the length of array



for(var i = 0; i < n; i++){
    console.log(arr[i]);
} // For trasversing the array

arr.push(5); // Insert element in array
arr.pop(); // remove last element array

arr.unshift(5); // Insert element in the starting index.
arr.shift(); // Remove starting element




xrr = [4,"nitin", 6.7, true, [2,3,5,6] ];
console.log(xrr); // We can multiple data type in single array

// for(var i=0; i<arr.length; i++){
//     console.log(i,xrr[i]);
// }
// traversing the array

// FOR OR LOOP FOR ARRAY

brr = [1,3,4,6,7];
console.log(brr);
for(const ele in brr){
    ele *= 2;
    console.log(ele);
}

// For each loop we can give multiple argument
