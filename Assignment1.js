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

function fibrecur(number ,c = 0 , a = 0 , b = 1 , arr=[] ){
    if ( number == 0 ) return 0
    else {

        c = a + b  
        a = b  
        b = c 
        arr.push(a)
            
    
    return    arr.concat(fibrecur(number - 1 ,a , b , c , arr ))
    }


}

console.log(fibrecur(0))

const arr = [1,2,3,4]



