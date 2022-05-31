const q = document.getElementById("q")
const w = document.getElementById("w")
const e = document.getElementById("e")
const r = document.getElementById("r")
const t = document.getElementById("t")
const y = document.getElementById("y")
const u = document.getElementById("u")
const i = document.getElementById("i")
const o = document.getElementById("o")
const p = document.getElementById("p")
const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")
const z = document.getElementById("z")
const x = document.getElementById("x")
const c = document.getElementById("c")
const v = document.getElementById("v")
const b = document.getElementById("b")
const n = document.getElementById("n")
const m = document.getElementById("m")

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

let currentWord
let hiddenWord 
let livesRemaining = 9
let finalWord
let finalStringWord

const addWord = () => {
    const randomIdx = Math.floor(Math.random() * wordList.length)
    currentWord = wordList[randomIdx].toUpperCase()
    hiddenWord = "_".repeat(currentWord.length)
    word.innerHTML = hiddenWord
    bangPic.src = "img/bang-pic-9.jpg"
    lives.innerHTML = "9 lives remaining"
    finalWord = Array(currentWord.length).fill("_")
    btn.classList.add("used")
}

const updateFinalWord = (letter, idx, double) => {
    finalWord[idx] = letter
    finalWord[double] = letter
}

const makeKeyUsed = (letter) => {
    if(letter === "Q") q.classList.add("used")
    if(letter === "W") w.classList.add("used")
    if(letter === "E") e.classList.add("used")
    if(letter === "R") r.classList.add("used")
    if(letter === "T") t.classList.add("used")
    if(letter === "Y") y.classList.add("used")
    if(letter === "U") u.classList.add("used")
    if(letter === "I") i.classList.add("used")
    if(letter === "O") o.classList.add("used")
    if(letter === "P") p.classList.add("used")
    if(letter === "A") a.classList.add("used")
    if(letter === "S") s.classList.add("used")
    if(letter === "D") d.classList.add("used")
    if(letter === "F") f.classList.add("used")
    if(letter === "G") g.classList.add("used")
    if(letter === "H") h.classList.add("used")
    if(letter === "J") j.classList.add("used")
    if(letter === "K") k.classList.add("used")
    if(letter === "L") l.classList.add("used")
    if(letter === "Z") z.classList.add("used")
    if(letter === "X") x.classList.add("used")
    if(letter === "C") c.classList.add("used")
    if(letter === "V") v.classList.add("used")
    if(letter === "B") b.classList.add("used")
    if(letter === "N") n.classList.add("used")
    if(letter === "M") m.classList.add("used")
}

const makeAllKeysUsed = () => {
    makeKeyUsed("A")
    makeKeyUsed("B")
    makeKeyUsed("C")
    makeKeyUsed("D")
    makeKeyUsed("E")
    makeKeyUsed("F")
    makeKeyUsed("G")
    makeKeyUsed("H")
    makeKeyUsed("I")
    makeKeyUsed("J")
    makeKeyUsed("K")
    makeKeyUsed("L")
    makeKeyUsed("M")
    makeKeyUsed("N")
    makeKeyUsed("O")
    makeKeyUsed("P")
    makeKeyUsed("Q")
    makeKeyUsed("R")
    makeKeyUsed("S")
    makeKeyUsed("T")
    makeKeyUsed("U")
    makeKeyUsed("V")
    makeKeyUsed("W")
    makeKeyUsed("X")
    makeKeyUsed("Y")
    makeKeyUsed("Z")
}

const endGame = () => {
    if (currentWord === finalStringWord) {
        makeAllKeysUsed()
        lives.innerHTML = "Well done!" + "🔥"
    }
}

const findLetter = (letter) => {
    const currWordArr = currentWord.split("")
    let idx, double

    makeKeyUsed(letter)

    currWordArr.map((char, index) => {
        if (char === letter) {
            idx = currWordArr.indexOf(letter)
            double = currWordArr.lastIndexOf(letter)
        }
        if (index === idx) updateFinalWord(letter, idx, double)
    })

    finalStringWord = finalWord.join("")

    if (idx !== undefined) {
        word.innerHTML = finalStringWord
    } else {
        livesRemaining -= 1
        bangPic.src = `img/bang-pic-${livesRemaining}.jpg`

        if (livesRemaining <= 0) {
            lives.innerHTML = "Game over!" + "😭"
            bangPic.src = "img/bang-pic-0.jpg"
            makeAllKeysUsed()
            word.innerHTML = currentWord
            word.classList.add("used")
        } else if (livesRemaining === 1) {
            lives.innerHTML = `${livesRemaining} life remaining` 
        } else {
            lives.innerHTML = `${livesRemaining} lives remaining`
        }
    }

    endGame()

}