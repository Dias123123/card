const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OKAY'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OKAY'
        gmailResult.style.color = 'red'
    }
}

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 1)
    }
}

move ()