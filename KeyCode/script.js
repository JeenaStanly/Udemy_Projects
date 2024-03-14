const insert = document.getElementById('insert')
window.addEventListener('keydown', (keyboardEvent) => {
    insert.innerHTML =
        `<div class="key">
    ${keyboardEvent.key === ' ' ? 'Space' : keyboardEvent.key}
    <small>event.key</small>
    </div>
    <div class="key">
     ${keyboardEvent.keyCode}
     <small>event.code</small>
    </div>
    <div class="key">
     ${keyboardEvent.code}
     <small>event.code</small>
    </div>`
})