const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let currentTab = 0

const hideTabContent = () => {
    tabContent.forEach(tabBlock => {
        tabBlock.style.display = 'none'
    })
    tabs.forEach(tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContent[indexElement].style.display = 'block'
    tabs[indexElement].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent(0)
setInterval(switchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItem , tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(currentTab)
            }
        })
    }
}



const  card = document.querySelector('.card')
const  btnPrev = document.querySelector('#btn-prev')
const  btnNext = document.querySelector('#btn-next')
let count = 1

const fetchCard = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `
        })
}

btnNext.onclick = () => {
    count++
    if (count > 200) {
        count = 0
    } else {
        fetchCard(count)
    }
}

btnPrev.onclick = () => {
    count--
    if (count < 1) {
        count = 201
    } else {
        fetchCard(count)
    }
}

fetchCard(count)


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => { return response.json(); }) .then((data) => { console.log(data); });

