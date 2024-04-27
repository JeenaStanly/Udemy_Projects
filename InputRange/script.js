const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = + e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')//used to get the property value of width which is given as 300px in css
    const label_width = getComputedStyle(label).getPropertyValue('width')//get the label width which is 80px

    const num_width = + range_width.substring(0, range_width.length - 2) //converting range_width ie;300px to a number ie; just 300 after removing px


    const num_label_width = + label_width.substring(0, label_width.length - 2)

    const max = + e.target.max
    const min = + e.target.min //setting the min and max value accordingly


    /* Positioning label according to The Range */


    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    label.innerText = value // setting the value of label as value in the input range
})
//function to map a range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
} 