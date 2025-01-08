function OnetoN(n){
    for(var i = 1; i <=n; i++){
        console.log(i);
    }
}
OnetoN(5);
OnetoN(6);



function sum (a,b){
    r = a+b;
    if(a <=0 || b <=0){
        return;
    }
    else{
        return r*r;
    }
}

console.log(sum(1,2));