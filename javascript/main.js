const elementWord = document.querySelector('#text-change')
const elementWpm = document.querySelector('.sel-left')
const elementBtnStart = document.querySelector('.sel-right')

const text = "And so, reader, farewell to Sherlock Holmes! These are positively the last stories. Not all the stories are  permitted. Part 2 will be recorded when the reader is able"
var wpm = 120

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function textToWords(str, ms) {
    str = str.concat(' ')
    var aux = 0
    var whiteSpace = str.indexOf(' ', aux)
    var subS = ''

    for(let i=0; i < whiteSpace +1; i++) {
        subS = str.substring(aux, whiteSpace)
        if(subS !== '') {
            elementWord.innerHTML = subS
            await sleep(ms)
        }
        aux = whiteSpace + 1
        whiteSpace = str.indexOf(' ', aux)
    }
}

elementWpm.addEventListener('change', function() {
    wpm = elementWpm.value
    console.log(wpm)
})

elementBtnStart.addEventListener('click', function() {
    var ms = 1000 / (wpm / 60)
    textToWords(text, ms)
})