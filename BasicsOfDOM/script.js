console.log("hello bhai");
// Element selection in html
let x = document.querySelector("h1");
console.log(x);
y = document.querySelectorAll(".text");
console.log(y);


// Change CSS in javascript
let a = document.querySelector("h1");
a.style.color = "green";


// CSS USING selectTIMEout
let z = document.querySelector(".j");
setTimeout(function(){
    z.style.fontSize = " Geologica";
    z.style.color = "Pink";
}, 1000)  // Change Color of javascript text after one second



// Change HTML in javascript

let b = document.querySelector("h3");
// b.innerHTML = "Patel";





// Event Listeners

/*
Kisi Element ko click karo ya hover karo ya mouse scroll karo
to site me changes aaye ya us div me changes aaye
*/

let u = document.getElementById("name");
u.addEventListener("mousemove", function(){
    u.style.color = "orange";
    u.style.backgroundColor = "black";
})

u.addEventListener("mouseout", function(){
    u.style.color = "";
    u.style.backgroundColor = "";
});


// Clicking on another element to get changes on another element
let o = document.getElementById("welcome");
// u.addEventListener("click", function(){
//     o.innerHTML = "Welcom Bolte !";
// });

// Adding function to restore after clicking it

u.addEventListener("click", function(){
    if(o.innerHTML === "Welcome Bolte!"){
        o.innerHTML = "Welcome to DOM part of";
    }
    else{
        o.innerHTML = "Welcome Bolte!";
    }
});