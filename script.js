
const wordList = [
    "strawberry", "friendship", "everything", "appreciate", "motivation",
    "abilities", "adulthood", "expertise", "technique", "recognise",
    "blizzard", "dazzling", "aardvark", "exorcism", "academic",
    "jacuzzi", "abandon", "journey", "license", "example"
]

const word = document.getElementById("word")
const btn = document.getElementById("btn")
const lives = document.getElementById("lives")
const bangPic = document.getElementById("bangPic")

let currentWord = "STRAWBERRY"
let hiddenWord 
let livesRemaining = 9

const addWord = () => {
    const randomIdx = Math.floor(Math.random() * wordList.length)
    currentWord = wordList[randomIdx].toUpperCase()
    hiddenWord = "_".repeat(currentWord.length)
    word.innerHTML = hiddenWord
    bangPic.src = "img/bang-pic-9.jpg"
    lives.innerHTML = "9 lives remaining"
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
        if (char !== "_") char = char
        return char
    }).join("")

    if (idx !== undefined) {
        word.innerHTML = hiddenResult
    } else {
        livesRemaining -= 1
        bangPic.src = `img/bang-pic-${livesRemaining}.jpg`

        if (livesRemaining <= 0) {
            lives.innerHTML = "Game over!"
            bangPic.src = "img/bang-pic-0.jpg"
        } else if (livesRemaining === 1) {
            lives.innerHTML = `${livesRemaining} life remaining` 
        } else {
            lives.innerHTML = `${livesRemaining} lives remaining`
        }
    }

}



