const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

//create ana array of messages
const message = ['message one', 'message two', 'message three', 'message four']
//add event listener and call a function
button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}