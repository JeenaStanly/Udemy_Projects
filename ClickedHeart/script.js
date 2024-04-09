const loveme = document.querySelector('.loveme')
const times = document.querySelector('#times')
let timeslicked = 0

loveme.addEventListener('click', (e) => {
    createHeart(e)
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveme.appendChild(heart)

    times.innerHTML = ++timeslicked

    setTimeout(() => heart.remove(), 1000)
}