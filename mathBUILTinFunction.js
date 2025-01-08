console.log(Math.abs(-7)); // Math.abs() function is used to convert negative to positive
console.log(Math.max(5,34,-1)); // Math.max() function is used to compare numbers and give the output of the no which is the highest

console.log(Math.pow(2,3)); // Math.pow() function is used to give output in power like 2^3 = 8

console.log(Math.sqrt(4)); // Give output of the sqr rt i need



// Important function
console.log(Math.floor(34.35)); // Give me the integer part big


console.log(Math.random()); // Give random no between 0 and 1
// Write a code to create to a random no to give a random no between 0 to 9

function generateRandomNumber() {
    let randomDecimal = Math.random(); // Generate a random decimal between 0 and 1
    let scaledNumber = randomDecimal * 10; // Scale it to 0-10
    let randomInteger = Math.floor(scaledNumber); // Round down to the nearest integer (0-9)
    console.log(randomInteger);
}

generateRandomNumber(); // Call the function
