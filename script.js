
const wordList = [
    "abruptly", "avenue", "awkward", "banjo", "bikes", "buffalo",
    "crypt", "cycle", "dwarves", "equip", "espionage", "flapjack",
    "fuzzy", "galaxy", "gazebo", "gnarly", "hyphen", "ivory",
    "jackpot", "jazz", "jigsaw", "jumbo", "kayak", "kiosk", "length",
    "luxury", "matrix", "microwave", "nightclub", "nowadays", "oxygen",
    "pyjamas", "peekaboo", "pixel", "pneumonia", "purring", "queue",
    "quiz", "rhubarb", "rhythm", "scratch", "sphinx", "strength",
    "syndrome", "transplant", "twelfth", "upwards", "unzip", "vodka",
    "vortex", "videos", "walkway", "whisky", "wizard", "xylophone",
    "youthful", "yummy", "zigzag", "zombie"
]

const word = document.getElementById("word")
const btn = document.getElementById("btn")
const lives = document.getElementById("lives")
const bangPic = document.getElementById("bangPic")

let currentWord = "STRAWBERRY"
let hiddenWord 
let livesRemaining = 9
let finalWord

const addWord = () => {
    const randomIdx = Math.floor(Math.random() * wordList.length)
    currentWord = wordList[randomIdx].toUpperCase()
    hiddenWord = "_".repeat(currentWord.length)
    word.innerHTML = hiddenWord
    bangPic.src = "img/bang-pic-9.jpg"
    lives.innerHTML = "9 lives remaining"
    finalWord = Array(currentWord.length).fill("_")
    console.log(currentWord)
}

const updateFinalWord = (letter, idx, double) => {
    finalWord[idx] = letter
    finalWord[double] = letter
}

const findLetter = (letter) => {
    const currWordArr = currentWord.split("")
    hiddenWord = "_".repeat(currentWord.length)
    let idx, double

    currWordArr.map((char, index) => {
        if (char === letter) {
            idx = currWordArr.indexOf(letter)
            double = currWordArr.lastIndexOf(letter)
        }
        if (index === idx) updateFinalWord(letter, idx, double)
    })

    if (idx !== undefined) {
        word.innerHTML = finalWord.join("")
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



