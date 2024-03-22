const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        /* console.log(e);
        const x = e.clientX
        const y = e.clientY
        console.log(x, y);
        //here after clicking button we get the x-axis and y-axis values from top and left according to the position we clicked

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        console.log(buttonTop, buttonLeft);

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        console.log(xInside, yInside); */
        const xInside = e.offsetX
        const yInside = e.offsetY
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})

//https://www.youtube.com/watch?v=GqtqRi_R34Y check this link to learn more about js positioning

//   offsetX = clientX - offsetLeft

//position inside the box = position according to x-axis  -  box starting position from the screen