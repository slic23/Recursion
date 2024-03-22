function fib(){
    let a = 0
    let b = 1
    let c = 0
    

    for(let x = 0 ; x < 100 ; x++){

        console.log(b)
        c = a + b 
        a =  b 
        b = c 

    }
}

function fibrecur(number, a = 0, b = 1, arr = []) {
    if (number === 0) return arr;
    
    let c = a + b;
    a = b;
    b = c;
    arr.push(a);
    
    return fibrecur(number - 1, a, b, arr);
}

console.log(fibrecur(10))




