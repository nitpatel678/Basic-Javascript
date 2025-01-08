// Object is kind of like map/dic where key value parts are stored.

let x = {
    age : "nitin",
    age : 20,
    marriage : false,
    perent : 96.4
};

console.log(x.age);

// We can also store string as variable in object in js.

let a = {
    name : "Patel",
    "age" : "20",
    height : 180
};

console.log(a.age); // Give output 20

// For in Loop
for (const key in a) {
        console.log(a[key]);    
}

