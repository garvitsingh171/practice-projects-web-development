const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const start = document.getElementById('start');

let count = 0;

function updateCounter() {
    counter.textContent = count;
}

increment.addEventListener('click', () => {
    count += 1;
    // counter.textContent = count;
    updateCounter()
})

decrement.addEventListener('click', () => {
    if (count != 0) {
        count -= 1;
    }
    else {
        count = 0
    }
    counter.textContent = count;
    updateCounter()
})

let div = document.createElement('div');

let audio1 = new Audio('timer-sound-426781.mp3');
let audio2 = new Audio('alarm-clock-90867.mp3');

start.addEventListener('click', () => {

    if (count != 0) {
        audio1.play()
    }

    let i = count;
    div.innerText = "";

    if (!document.body.contains(div)) {
        document.body.appendChild(div);
    }
    let timer = setInterval(() => {
        counter.textContent = i;

        if (i === 0) {
            clearInterval(timer);
            div.innerText = 'Timeout';
            audio2.play();
        }

        i--;
    }, 1000);
})

reset.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
    div.innerText = "";
    updateCounter()
})