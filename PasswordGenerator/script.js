const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generator')

const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
//created an object randomFunction to get random function

generateEl.addEventListener('click', () => {
    const length = parseInt(lengthEl.value) //or you can use +lengthEl.value to convert string to number

    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasNumber = numEl.checked
    const hasSymbol = symbolEl.checked


    // checking the condition of the checkbox
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typeCount = lower + upper + number + symbol
    //count the checked boxes
    const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    //filter the unchecked boxes from the checked boxes

    if (typeCount === 0) {
        return ''
    }

    for (i = 0; i < length; i += typeCount) {
        typeArr.forEach(type => {
            console.log(type);//we get output as {lower:true}
            const funcName = Object.keys(type)[0]
            console.log(funcName);//we get output as lower
            generatedPassword += randomFunc[funcName]()
            console.log(generatedPassword);
            //pass the type's key value to randomFunc object to get the randomfunctions which generate lower,upper,number and symbol

        })
    }
    const finalPassword = generatedPassword.slice(0, length)//slice the generated password to given length
    console.log(finalPassword);
    return finalPassword


}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 96))
}
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 64))
} function getRandomNumber() {
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48))
} function getRandomSymbol() {
    const symbols = '!@#$%&*()^/'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//here String is an js object and fromCharCode is a method to get charchers and its code
//lower case acii code starts from 97
//Uppercase code starts from 64
//numbers dtarts from 48
//Math.floor(Math.random()) is used to get a random number

clipboardEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultEl.innerText //assigning the innerTextor finalPassword of result element into password
    if (!password) { return }
    textArea.value = password//assigning the textArea value as password
    document.body.appendChild(textArea)
    textArea.select()//select method select everything in the textArea
    document.execCommand('copy')//this command is deprecated so learn and use clipboard api for clipboard events
    textArea.remove()
    alert('Password copied to clipboard')

})
