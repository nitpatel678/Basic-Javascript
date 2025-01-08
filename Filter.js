// FILTER CONCEPT
// For example fiter out even no.
function fun(ele){
    if(ele % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let arr = [3,35,6,23,2];
let brr = arr.filter(fun);
console.log(brr);

arr = arr.filter((ele) => {
    if (ele < 5) {
        return true;
    } else {
        return false;
    }
});   // Another of using filter

console.log(arr);


