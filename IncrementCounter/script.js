const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = Number(counter.getAttribute('data-target'))
        //const target= +counter.getAttribute('data-target') + is used as an another representation of changing string to number
        const c = +counter.innerText
        const increment = target / 500

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        else {
            counter.innerText = target
        }
    }
    updateCounter()
})
