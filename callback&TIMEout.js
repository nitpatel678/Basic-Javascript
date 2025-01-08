// Callback function aisa function hota jo ek function ke andadr pass hota hai
function products(a,b,c){
    return a*b*c;
};

console.log(products(4,5,6));


function fun(callfunction, y){     // callfuntion is used to recall the product fucntion and - y as a result
    console.log(callfunction-y);
}

fun(products(5,6,7),5);


// Problem :
// Print 1 to 10 but with delay of 1 sec after each no get printed

// Using a timeout function

for(let i = 1; i <=  10;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}