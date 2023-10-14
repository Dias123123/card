const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'GOOD'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT GOOD'
        gmailResult.style.color = 'red'
    }
}

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 5)
    } else if (positionX >= 449 && positionY < 449) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 5)
    } else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 5)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 5)
    }
}

move ()

const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const intervalBtn = document.querySelector('.interval')

let second = 0;
let interval;

const startTimer = () => {
    second++;
    intervalBtn.innerHTML = second;
}

startBtn.addEventListener('click', () => {
    interval = setInterval(startTimer, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    second = 0;
})