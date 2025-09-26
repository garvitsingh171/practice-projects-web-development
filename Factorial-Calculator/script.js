const intEnt = document.getElementById('integer')
const calculate = document.getElementById('submit')
const answer = document.getElementById('answer')

function factorial(){
    n = intEnt.value
    let fact = 1
    for (let i = 1; i <= n; i++){
        fact = fact * i
    }
    return fact
}

calculate.addEventListener('click',()=>{
    answer.textContent = factorial()
})