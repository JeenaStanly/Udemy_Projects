const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

//Toggle between Dark and Light Mode

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggle.innerText = "Dark Mode"
        //or we can use e.target.innerHTML= "Dark Mode"

    }
    else {
        html.classList.add('dark')
        e.target.innerHTML = "Light Mode"
        //or we can use toggle.innerText= "Light Mode"

    }
})

//Set Time
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function setTime() {
    const time = new Date()
    console.log(time);//return output as eg; Thu Mar 21 2024 23:04:51 GMT-0400(Eastern Daylight Time) from here we can get all the things we wanted
    const day = time.getDay()
    console.log(day);//Output will be Like which day it is like 4th ,5th etc.
    console.log(days[day]);//prints the day like sunday,monday etc
    const month = time.getMonth()
    console.log(month);//get the index of the month
    const date = time.getDate()
    console.log(date);
    console.log(months[month]);//get the month
    const hours = time.getHours();
    console.log(hours);
    const hoursForClock = (hours % 12) > 0 ? `${hours % 2}` : `12`;
    //????
    //convert 24 hour clock to 12 hour clock


    console.log(hoursForClock);
    const minute = time.getMinutes()
    console.log(minute);
    const seconds = time.getSeconds()
    console.log(seconds);
    const ampm = hours >= 12 ? 'PM' : 'AM'



    //setting the time class
    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`//setting if minute less than 10minutes print 01,02,03,04,05,06,07,08,09

    //Setting the Day

    dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`

    //Setting the needles

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`


}

//StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime()
setInterval(setTime, 1000)