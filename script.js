
const wordList = [
    "aaaas", "aaasa", "aasaa", "asaaa", "saaaa"
]

const word = document.getElementById("word")
const btn = document.getElementById("btn")
const lives = document.getElementById("lives")

let currentWord = "STRAWBERRY"
let hiddenWord 
let livesRemaining = 9

const addWord = () => {
    const randomIdx = Math.floor(Math.random() * wordList.length)
    currentWord = wordList[randomIdx].toUpperCase()
    hiddenWord = "_".repeat(currentWord.length)
    word.innerHTML = hiddenWord
}

const findLetter = (letter) => {
    const currWordArr = currentWord.split("")
    hiddenWord = "_".repeat(currentWord.length)
    const hidWordArr = hiddenWord.split("")
    let idx

    currWordArr.map(char => {
        if (char === letter) idx = currWordArr.indexOf(letter)
    })

    const hiddenResult = hidWordArr.map((char, index) => {
        if (index === idx) char = letter
        return char
    }).join("")

    if (idx !== undefined) {
        word.innerHTML = hiddenResult
    } else {
        livesRemaining -= 1
        lives.innerHTML = `${livesRemaining} lives remaining`
    }

    console.log(livesRemaining)
}



