const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quisquam.'
    profile_img.innerHTML = '<img src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg" alt="">'
    nameEl.innerHTML = 'Jane Davis'
    date.innerHTML = 'Mar 26, 2024'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg_Text => bg.classList.remove('animated-bg-text'))
}