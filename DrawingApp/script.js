
/* Canvas API for drawing
    https://www.w3schools.com/tags/canvas_arc.asp
    learn more abot canvas API here
*/



const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') //creating a 2d context object for a canvas

let size = 20;
let color = 'black';
let x;
let y;

function drawFilledCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2) // arc() method adds an arc (curve) to the path
    //arc(x-cordinate,y-cordinate,radius,start-angle,end-angle,counterclockwise:true/false)
    //false is default,while true- indicates counterclockwise
    ctx.fillStyle = color;
    ctx.fill() //fill that shape with the specified color
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke()
}

function drawCircle(x, y) {
    ctx.beginPath();
    let r = 45;
    ctx.arc(x, y, r, 0, Math.PI * 2)//one pi draws a half circle that's why we are using 2 pi 
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke() //draw that dhape with specified color
}
drawFilledCircle(100, 400)
drawLine(300, 300, 300, 500)
drawCircle(300, 100)

// Draw a Rectangle

function drawRectangle(x, y) {
    ctx.fillStyle = 'blue';

    ctx.fillRect(x, y, 150, 100)//function to draw the rectangle

}
drawRectangle(20, 20)

//Draw a Path

ctx.beginPath();//function to begin a new path
ctx.moveTo(20, 150);//the point where line starts
ctx.lineTo(20, 300);//the point where line ends
ctx.lineTo(70, 300)
ctx.strokeStyle = 'orange'//color of the line
ctx.stroke();//function to draw the line
