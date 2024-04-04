const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

//create ana array of messages and types
const message = ['message one', 'message two', 'message three', 'message four']
const type = ['success', 'error', 'info']
//add event listener and call a function
button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}

function getRandomType() {
    return type[Math.floor(Math.random() * type.length)]
}