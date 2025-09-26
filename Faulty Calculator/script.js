/*  + --> -
    * --> +
    - --> /
    / --> **
*/


function randomGenerator(){
    x = Math.random()*100
    return x
}

a = randomGenerator()

function calculator(a,b){
    if (a > 10) {
        return a + b
        // return a - b
        // return a * b
        // return a / b
        // return a ** b
    }
    else {
        return a - b
        // minus = a / b
        // multi = a + b
        // div = a ** b
        // pow = a ** b
    }
}

b = calculator(12,34)
console.log(b)

// node "Faulty Calculator/script.js"