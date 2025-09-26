const boxFirst = document.getElementById('box1')
const boxSecond = document.getElementById('box2')
const boxThird = document.getElementById('box3')
const boxForth = document.getElementById('box4')
const boxFifth = document.getElementById('box5')

const changeColor = document.getElementById('button')

const colorPalette = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
];

function randNum() {
    num = Math.floor(Math.random()*16)
    return num
}

changeColor.addEventListener('click',()=>{
    boxFirst.style.backgroundColor = colorPalette[randNum()]
    boxSecond.style.backgroundColor = colorPalette[randNum()]
    boxThird.style.backgroundColor = colorPalette[randNum()]
    boxForth.style.backgroundColor = colorPalette[randNum()]
    boxFifth.style.backgroundColor = colorPalette[randNum()]
})