window.addEventListener('load', () => {
    const loaderEl = document.querySelector('.loader');
    loaderEl.classList.add('hidden');
    loaderEl.addEventListener('transitionend', () => {
        document.body.removeChild(loaderEl)
    })

})