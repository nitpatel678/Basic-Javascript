// If-else else-if statement conditon

// Basic Operations

age = 24;
if(age>18){
    console.log("Adult");
}
else{
    console.log("Child");
}




rate = 4;
if(rate == 1){
    console.log("Worst");
}
else if(rate == 2){
    console.log("Poor");
}
else if(rate == 3){
    console.log("Good");
}
else if(rate == 4){
    console.log("Very good");
}
else{
    console.log("Excellent");
}


no = 343;
if(no >=100 && no <= 999){
    console.log("No is 3 digit no");
}
else{
    console.log("No is not 3 digit no");
}


// TRIPLE EQUALS === Concept



a = 5;
b ='5';
console.log(a==b); // Prints True
// == It checks the value which is being stored not the data type of the variable
// where as === checks the data type of variable and compare it and then gives boolean value

console.log(a===b); // Prints False
// Because a is int and b is string


