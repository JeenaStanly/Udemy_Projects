const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)
}))

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked) {
        fast.checked = false
    }
    else if (good.checked && fast.checked) {
        cheap.checked = false
    }
    else {
        good.checked = false
    }

}
